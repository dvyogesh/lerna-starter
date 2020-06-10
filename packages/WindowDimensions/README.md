
[![GitHub license](https://img.shields.io/github/license/x3388638/react-grid-carousel)](https://github.com/x3388638/react-grid-carousel/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/react-grid-carousel.svg)](https://badge.fury.io/js/react-grid-carousel) [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)


Demo: https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-windowdimensions--window-dimensions

<h1 align="center">get window / viewPort width / height </h1>
  `react-window-dimensions-hook` will helps to get <span style={{color:'red'}}>window / viewPort width </span> or <span style={{color:'red'}}> window / viewPort  height </span>. 
<p> </p>
`react-window-dimensions-hook` is a powerful and lightweight, flexible ES6 JavaScript library 
it will help to solve css in js problems and will hepls to get height and width


```bash
Supports Resize the window also.we can access dynamic width/height while browser rezize
```

## Features

- Server side rendering
- we can access window width and height very simpley
- support Resize the window
- light waight


## Install

```bash
$ npm install react-window-dimensions-hook --save

$ yarn add react-window-dimensions-hook
```

## Usage

Just import the `useWindowDimensions` component from `react-window-dimensions-hook`  

```javascript
  import React, { useEffect } from 'react';
  import useWindowDimensions from 'react-window-dimensions-hook';
  
  const WidthHeightExample = () => {
    useEffect(()=>{
      const {width, height} = useWindowDimensions();
      console.log('width', width);
      console.log('height', height);
    })

    return(
      <div>check width and height in browser console</div>
    )
  }

  export default WidthHeightExample;

```


##### Simple DOM Example conditional Render

Just import the `useWindowDimensions` component from `react-window-dimensions-hook`  

```javascript
  import React from 'react';
  import useWindowDimensions from 'react-window-dimensions-hook';
  const {width, height} = useWindowDimensions();

  console.log('width', width);
  console.log('height', height);
  const WidthHeightExample = () => (
    <div>
      <p>width is ${ width } </p>
      <p>height is ${ height } </p>
    </div>
  )

  export default WidthHeightExample;
```


## ##### Simple DOM Example conditional Render react

in this way we can avoid window undefined error while add `window.addEventListener`
```javascript
  import React from 'react';
  import useWindowDimensions from 'react-window-dimensions-hook';
  const {width, height} = useWindowDimensions();

  console.log('width', width);
  console.log('height', height);
  const WidthHeightExample = () => (
      <div>
      {
        width > 768 && (
          <p>width is ${ width } </p>
        )
      }
      
      {
        height > 200 && (
          <p>height greterthen 200</p>
        )
      }
    </div>
  )

  export default WidthHeightExample;
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-windowdimensions--window-dimensions


## supports Universal Testing Pattern 


## LICENSE

MIT
