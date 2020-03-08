const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?)$';
module.exports = {
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testURL: 'http://localhost',
  "transform": {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  }
};
