module.exports = {
   stories: ['../packages/**/*.stories.(js|mdx)'],
   // presets: ['@storybook/addon-docs/preset'],
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