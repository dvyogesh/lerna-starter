module.exports = {
    stories: ['../packages/**/*.story.(js|mdx|jsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        {
            name: '@storybook/addon-docs/preset',
            options: {
              configureJSX: true,
            },
        }
    ],
  };