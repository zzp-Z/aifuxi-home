import eslint from "@eslint/js";
import eslintPluginCheckFile from "eslint-plugin-check-file";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

// 获取当前文件目录路径
const __dirname = dirname(fileURLToPath(import.meta.url));
export default tseslint.config(
  {
    ignores: [
      ".next/",
      "**/node_modules",
      "**/dist",
      "**/build",
      "**/public",
      "**/.gitignore",
      "**/pnpm-lock.yaml",
      ".next/types/**/*.ts",
      "next-env.d.ts",
      "next.config.mjs",
      ".prettierrc.cjs",
      ".commitlintrc.cjs",
      "postcss.config.cjs",
      "next-sitemap.config.cjs",
      "tailwind.config.ts",
      "eslint.config.mjs",
      "src/blocks/**",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    plugins: {
      eslintPluginReactHooks,
      eslintPluginCheckFile,
      eslintPluginImport,
      eslintPluginTailwindcss,
      eslintPluginPrettier,
    },
  },
  {
    rules: {
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
    },
  },
);
