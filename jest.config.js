module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/build/",
    "<rootDir>/src/__tests__/utils/",
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
