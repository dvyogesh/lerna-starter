import React from 'react';
import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));


addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    prepareForInline: (storyFn) => storyFn(),
  },
});


// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

/**
 * Uses Webpack Context
 * https://webpack.js.org/guides/dependency-management/#require-context
 * We are importing all stories from the packages directory.
 * If required we can update this to start at route, but for now lets
 * keep it at components.
 */
const req = require.context('../packages', true, /.story.(mdx|jsx|js)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
