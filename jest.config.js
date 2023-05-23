module.exports = {
  preset: "jest-expo",
  verbose: false,
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/scripts/setupJest"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  transformIgnorePatterns: [],
  reporters: [
    "default",
    [
      "jest-sonar",
      { outputDirectory: "test/coverage/", outputName: "test-report.xml" }
    ]
  ],
  coverageDirectory: "test/coverage",
  collectCoverage: true,
  isolatedModules: true,
  collectCoverageFrom: [
    "src/atomic/**/*.{ts,tsx}",
    "!src/atomic/**/*.d.ts",
    "!src/atomic/**/*.story.tsx"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/android/",
    "<rootDir>/ios/",
    "<rootDir>/lib/",
    "<rootDir>/test/",
    "<rootDir>/dist/",
    "<rootDir>/babel.config.js",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/android/",
    "<rootDir>/ios/",
    "<rootDir>/reports/",
    "<rootDir>/utils/",
    "<rootDir>/docs/",
    "<rootDir>/theme/",
    "<rootDir>/introduction/",
    "<rootDir>/@types/",
    "<rootDir>/assets/",
    "<rootDir>/.ondevice/",
    "<rootDir>/.storybook/"
  ],
  moduleNameMapper: {
    "^react-native$": "<rootDir>/node_modules/react-native",
    "^react-native/(.*)": "<rootDir>/node_modules/react-native/$1"
  }
};
