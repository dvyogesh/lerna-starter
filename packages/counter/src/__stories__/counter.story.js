import React from 'react';
//import { storiesOf } from '@storybook/react';

import Counter from '../';

//const stories = storiesOf('Counter', module);

export default {
  title: 'Design System|Counter',

  parameters: {
    component: Counter,
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
};


export const basic = () => (
  <div>
    <Counter>
        {({ increase, decrease, count }) => (
          <div>
            <button onClick={decrease}>-</button>
            <div>{count}</div>
            <button onClick={increase}>+</button>
          </div>
        )}
      </Counter>
  </div>
);

export const basick = () => (
    <div>
      <Counter>
          {({ increase, decrease, count }) => (
            <div>
              <button onClick={decrease}>-</button>
              <div>{count}</div>
              <button onClick={increase}>+</button>
            </div>
          )}
        </Counter>
    </div>
  ); 

basic.story = {
  parameters: { docs: { storyDescription: '4 sizes are supported.' } },
};

basick.story = {
    parameters: { docs: { storyDescription: '4 sizes are supported.' } },
  };