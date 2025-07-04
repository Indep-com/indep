import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  rootDir: ".",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.base.json",
    },
  },
};
export default config;
