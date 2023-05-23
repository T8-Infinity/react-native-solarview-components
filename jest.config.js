module.exports = {
  preset: "jest-expo",
  verbose: false,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "<rootDir>/scripts/setupJest"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  reporters: [
    "default",
    [
      "jest-sonar",
      { outputDirectory: "test/coverage/", outputName: "test-report.xml" }
    ]
  ],
  transformIgnorePatterns: [],
  collectCoverage: true,
  coverageDirectory: 'test/coverage',
  coverageReporters: ['lcov'],
  isolatedModules: true,
  collectCoverageFrom: [
    'atomic/**/*.{ts,tsx}',
    '!atomic/**/*.d.ts',
    '!atomic/**/*.story.tsx',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
    '<rootDir>/lib/',
    '<rootDir>/test/',
    '<rootDir>/dist/',
    'babel.config.js',
    'metro.config.js',
  ],
  testPathIgnorePatterns: ['node_modules/', 'android/', 'ios/', 'reports/'],
}
