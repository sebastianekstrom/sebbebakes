const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./src/",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/src/"],
  testEnvironment: "jest-environment-jsdom",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  modulePathIgnorePatterns: ["./__tests__/e2e"],
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.tsx"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/setup.tsx"],
  moduleNameMapper: {
    "^@test/(.*)$": "<rootDir>/__tests__/$1",
  },
  collectCoverageFrom: [
    "!/node_modules/",
    "!tooling/",
    "!build/",
    "src/components/**/**/*.ts",
    "src/components/**/**/*.tsx",
    "!src/components/**/**/*.stories.ts",
    "!src/components/**/**/*.stories.tsx",
    "src/utils/**/**/*.ts",
    "src/utils/**/**/*.tsx",
    "src/pages/**/**/*.tsx",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
