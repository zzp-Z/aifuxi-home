import { Client } from "minio";

import {
  NODE_ENV,
  OSS_ACCESS_KEY_ID,
  OSS_ACCESS_KEY_SECRET,
  OSS_PORT,
  OSS_REGION,
} from "@/config";

const globalForMinIO = global as unknown as { minioClient: Client | undefined };

export const aliOSS =
  globalForMinIO.minioClient ??
  new Client({
    endPoint: OSS_REGION ?? "localhost", // MinIO 的服务器地址，通常是 IP 或域名
    port: OSS_PORT ?? 9000, // 默认端口是 9000
    useSSL: false, // 是否启用 SSL，根据配置调整
    accessKey: OSS_ACCESS_KEY_ID ?? "",
    secretKey: OSS_ACCESS_KEY_SECRET ?? "",
  });

if (NODE_ENV !== "production") globalForMinIO.minioClient = aliOSS;
