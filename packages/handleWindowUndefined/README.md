
[![GitHub license](https://img.shields.io/github/license/x3388638/react-grid-carousel)](https://github.com/x3388638/react-grid-carousel/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/react-grid-carousel.svg)](https://badge.fury.io/js/react-grid-carousel) [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)


Demo: https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-window-handle--window-handle

<h1 align="center">handle window undefined Error </h1>
will helps to solve <span style={{color:'red'}}>window undefined</span> or <span style={{color:'red'}}> undefined of window </span>. This error mostly comes in node js application at the time when you are trying to run browser object in server side.
<p> </p>
`handle-window-undefined` is a powerful and lightweight, flexible ES6 JavaScript library 


## Features

- Server side rendering
- light waight


## Install

```bash
$ npm install handle-window-undefined --save

$ yarn add handle-window-undefined
```

## Usage

Just import the `window` component from `handle-window-undefined`  

```javascript
import window from 'handle-window-undefined;
// we can access any function related to window object 
// like window.addEventListener, window.matchMedia, window.location ...etc
    
console.log(window)

```

#### -- OR --

##### Simple DOM Example

Just import the `GridCarousel` component from `handle-window-undefined`  
and pass your item as childrens


```javascript
import window from 'handle-window-undefined;
 
window.document.body.innerHTML = '<div class="foo">Hi!</div>';
window.document.body.querySelector('.foo').textContent;
```


## Another  Example with react

in this way we can avoid window undefined error while add `window.addEventListener`
```javascript
import React,{useEffect} from 'react';
import window from 'handle-window-undefined;

const WindowExample = () => {

  useEffect(()=>{
    window.addEventListener('click', ()=>{})
  })
}

export default WindowExample;

```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-window-handle--window-handle


## Universal Testing Pattern 

You can use a really simple pattern to enable your browser modules to run in Node.js. Just allow a window object to be passed in to your module and prepend any references to browser globals with win. Set win to the passed in window object if it exists, otherwise fallback to global window.

```javascript

  import window from 'handle-window-undefined'

  function createTitle(text, win) {
    win = win || (typeof window === 'undefined' ? undefined : window);
  
    const title = win.document.createElement('h1');
    title.innerHTML = text;
    return title;
  };
 
  module.exports = createTitle;
```






or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-window-handle--window-handle



## LICENSE

MIT
