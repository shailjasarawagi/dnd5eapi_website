module.exports = {
 preset: 'ts-jest',
 testEnvironment: 'jsdom',
 moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
 transform: {
  '^.+\\.jsx?$': 'babel-jest',
  '^.+\\.tsx?$': 'ts-jest',
 },
 transformIgnorePatterns: [
  "/node_modules/(?!axios)/"
 ],
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};