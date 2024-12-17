import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@solidjs/start/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    preset: "aws-lambda",
    compatibilityDate: "2024-11-23",
    awsLambda: {
      streaming: true,
    },
  },
  vite: {
    ssr: { noExternal: ["@kobalte/core", "@internationalized/message"] },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  },
});
