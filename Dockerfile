# syntax=docker.io/docker/dockerfile:1

# 阶段1: 基础环境
FROM node:22-alpine AS base
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk add --no-cache libc6-compat
RUN apk add --no-cache libc6-compat
# 使用现代且安全的 openssl 替代 libssl1.1
RUN apk add --no-cache openssl

# 阶段2: 依赖安装
FROM base AS deps
WORKDIR /app
# 精确复制必要文件（避免通配符问题）
COPY package.json pnpm-lock.yaml .npmrc* ./
RUN --mount=type=cache,id=pnpm,target=/root/.pnpm-store \
    export COREPACK_ENABLE_STRICT=false && \
    corepack enable pnpm && \
    pnpm i --frozen-lockfile;

# 阶段3: 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# 修正拼写
ENV IS_DOCKER=true 

# 添加构建缓存优化
RUN --mount=type=cache,target=/app/.next/cache \
    corepack enable pnpm && \
    pnpm db:gen && \
    pnpm run build:standalone;

# 阶段4: 运行环境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# 修正 Next.js 监听变量
ENV HOST=0.0.0.0  
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]