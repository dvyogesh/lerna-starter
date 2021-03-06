module.exports = {
    stories: ['../packages/**/*.story.(js|mdx|jsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links/register',
        {
            name: '@storybook/addon-docs/preset',
            options: {
              configureJSX: true,
            },
        }
    ],
  };