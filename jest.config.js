module.exports = {
 preset: 'ts-jest',
 testEnvironment: 'jsdom',
 moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
 transform: {
  '^.+\\.tsx?$': 'ts-jest',
 },
 transformIgnorePatterns: [
  "/node_modules/(?!axios)/"  // Adjust to include modules you need to transform
 ],
 setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};