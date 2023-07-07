import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    },
};

export default createJestConfig(config);
