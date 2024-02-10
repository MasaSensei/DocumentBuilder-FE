/** @type {import('next').NextConfig} */

import { config } from "dotenv";
import { resolve } from "path";
import { existsSync, readFileSync } from "fs";

const envFilePath = resolve(process.cwd(), ".env");
if (existsSync(envFilePath)) {
  const envFile = readFileSync(envFilePath);
  config({ path: envFile, override: true });
}

const nextConfig = {
  env: {
    DEV_LOCAL: process.env.DEV_LOCAL,
  },
};

export default nextConfig;
