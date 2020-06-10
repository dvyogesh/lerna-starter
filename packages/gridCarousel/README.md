
[![GitHub license](https://img.shields.io/github/license/x3388638/react-grid-carousel)](https://github.com/x3388638/react-grid-carousel/blob/master/LICENSE) [![npm version](https://badge.fury.io/js/react-grid-carousel.svg)](https://badge.fury.io/js/react-grid-carousel) [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)


Demo: https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--introduction

<h1 align="center">React Grid Carousel</h1>

GridCarousel is a powerful and multi-functional lightweight, flexible ES6 JavaScript slider/carousel library that helps you create responsive and touch-enabled sliders with fast and performant CSS3 transitions. it helps you create a highly customizable, fully responsive, mobile (only mobile) swipe-friendly content carousel/slider with lots of useful functionalities for modern web/mobile designs.
Mainly Every `div` has class so we can overide by using any parent class of app accoriding to requird design and responsive using `@media` query.

<p align="center">React resposive grid carousel component w/ grid layout <br />to easily create a carousel like photo gallery, shopping product card, to slide simple banners or anything you want</p>




<p align="center">
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/69d266ba9f7140994eefb5bb9623d7bd339a12ae/demo2.gif" width="400px" />
<img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/69d266ba9f7140994eefb5bb9623d7bd339a12ae/demo1.gif" width="100%" />
</p>

## Features

- Server side rendering
- custom scroll bar hide/show
- Multiple items slide
- Supports images, videos, text content or anything you want. Each direct child represents one slide!, Support any component as a item to put into grid
- hide/show dots
- hide/show arrow buttons
- Autoplay
- Customized layout Items
- Customized arrow button
- Customized dots
- Each div having class so we can overide css at any time in app
- Swipe to slide (mobile only)
- light waight


## Install

```bash
$ npm install @yoge-shource/grid-carousel-react --save

$ yarn add @yoge-shource/grid-carousel-react
```

## Usage

Just import the `GridCarousel` component from `@yoge-shource/grid-carousel-react`  
and pass your item into itemComponent prop 

```javascript
import React from 'react';
import GridCarousel from '@yoge-shource/grid-carousel-react';
const Item = ({item}) => (
  <div style={{
    height:'100px',
    width: '98%',
    border: '1px solid #ccc',
    margin: '5px'
  }}>
    {item.name}
  </div>
);
const carouselData = [{name: 'item1'},{name: 'item1'},{name: 'item1'},{name: 'item1'},{name: 'item1'}]
const CustomGridCarousel = () => {
  return (
    <GridCarousel customScrollbar={false} dots={true} carouselData={carouselData} itemComponent={Item} />
  )
}

```

#### -- OR --

##### Second Way

Just import the `GridCarousel` component from `@yoge-shource/grid-carousel-react`  
and pass your item as childrens


```javascript
import React from 'react';
import GridCarousel from '@yoge-shource/grid-carousel-react';
const Item = (index) => (<div>{index}</div>)
const carouselData = [{name: 'item1'},{name: 'item1'},{name: 'item1'},{name: 'item1'},{name: 'item1'}]

const Gallery = () => {
  return (
    <GridCarousel customScrollbar={false} dots={true} carouselData={carouselData}>
      <div>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </div>
      <div>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </div>
      <div>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </div>
      <div>
        {/* anything you want to show in the grid */}
      </div>
      {/* ... */}
    </Carousel>
  )
}
```

## Props

| Prop                                  | Type             | Default   | Description                                                                         |
| ------------------------------------- | ---------------- | --------- | ----------------------------------------------------------------------------------- |
| itemComponent                         | Type of React component or Element     | 1         | We need to pass `itemComponent` and `carouselData` as props to `GridCarousel`, then GridCarousel will take this component and loop this component using `carouselData` and while looping, GridCarousel will send `item`,`...otherprop` as pops to itemComponent.page                                                     |
| carouselData                                  | Array           | []         | 	`const data=[{},{}];<GridCarousel carouselData={data} />`
page                                                        |
| numberOfItemToScroll                  | Number            | 10       |`<GridCarousel numberOfItemToScroll={2} />`|
| loop                                  | Boolean          | false     | Infinite loop or not                                                                |
| otherProps                            | instence of Object || Array  | `<GridCarousel someProp={'tex'} someProp={[]}/>` |
| hideArrow                             | Boolean          | false     | Show/hide the arrow prev/next buttons                                               |
| dots                                  | Boolean          | false     | Show dots indicate the current page on desktop mode                                    |
| autoplay                              | Boolean           |           | Autoplay true \| false                          |
| numberOfCardsToShow                   | Number           | 1 | should be carouselData > numberOfCardsToShow`<GridCarousel numberOfCardsToShow={2} /> ` |
| hideArrowsOnEnd                      | Boolean           | false    | should be true \|\| false `<GridCarousel hideArrowsOnEnd={true} /> // true || false ` |
| customScrollbar                      | Bool            |     true      | should be true || false `<GridCarousel customScrollbar={true} /> // true || false `    |
| children                | Type of React children or Element      | 767  | should wrap with `<GridCarousel>` like `<GridCarousel carouselData={gridCarouselMockData} >  gridCarouselMockData.map((item, itemKey) => ( <div className="carousel-item"><CarouselItem item={item}/> </div>)) </GridCarousel> `   |
| customArrows                             | object          |           |	should wrap with double braces `customArrows={{}}`like `customArrows={{leftArrow: Arrows, // your Arrow component and do not <Arrow /> leftArrowProps: {left:'right', square:'square'}, // your Arrow component props rightArrow: Arrows, // your Arrow component props rightArrowProps:{right:'right', square:'square'} // your Arrow component props }} `   |
| arrowRight                            | Element          |           | Customized left arrow button                                                        |
| [dot](#dot)                           | Element          |           | 	should be true \|\| false `<GridCarousel dots={true} /> // true || false `
| containerStyle                        | Object           |           | Style object for carousel container                                                 |

## First way of integration

 In first way of integration, We need to pass `itemComponent` and `carouselData`
  as props to `GridCarousel`, then GridCarousel will take this component and loop this component using `carouselData`
  and while looping, GridCarousel will send `item`, `...otherprop` as pops to itemComponent.

`In This Way itemComponent and carouselData props are mandatory.`

```javascript

   import GridCarousel from '@yoge-shource/grid-carousel-react';
    
    <GridCarousel
      itemComponent={CarouselItem} // your component
      carouselData={gridCarouselMockData}
      otherProps={{
        loading: false
      }} // your other requered props
    />
    </GridCarousel>
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--first-way-of-integration


## Second way of integration

In this second way instedOf passing `itemComponent` prop, we can loop our component in side GridCarousel like below.

`In This Way loop of component and carouselData props are mandatory.`

sample

```javascript

  import GridCarousel from '@yoge-shource/grid-carousel-react';
    
    <GridCarousel carouselData={gridCarouselMockData} >
      {
        gridCarouselMockData.length > 0 && 
          gridCarouselMockData.map((item, itemKey) => (
            <div className="carousel-item">
                <CarouselItem item={item}/>
            </div>
        ))
      }
    </GridCarousel>
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--second-way-of-integration

## Dots Enable

To enable dots in GridCarousel pass `dots` prop as true `dots={true}`


```javascript

import GridCarousel from '@yoge-shource/grid-carousel-react'

In First Way
    
    <GridCarousel
      dots={true} // ---> here <---
      itemComponent={CarouselItem} // your component
      carouselData={gridCarouselMockData}
    />
    
    ---- OR ---- 
   In Second Way
    
    <GridCarousel
     dots={true} // ---> here <---
     carouselData={gridCarouselMockData} >
      {
        gridCarouselMockData.length > 0 && 
          gridCarouselMockData.map((item, itemKey) => (
            <div className="carousel-item">
                <CarouselItem item={item}/> // your component
            </div>
        ))
      }
    </GridCarousel>
  
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--dots-enable

## Hide custom scrollbar

To hide custom scrollbar pass customScrollbar prop as false `customScrollbar={false}`



```javascript

import GridCarousel from '@yoge-shource/grid-carousel-react'

   In First Way
    
    <GridCarousel
      customScrollbar={false} // here
      itemComponent={CarouselItem} // your component
      carouselData={gridCarouselMockData}
    />
    
   // ---- OR ---- 
   In Second Way
    
    <GridCarousel
     customScrollbar={false} //here
     carouselData={gridCarouselMockData} >
      {
        gridCarouselMockData.length > 0 && 
          gridCarouselMockData.map((item, itemKey) => (
            <div className="carousel-item">
                <CarouselItem item={item}/> // your component
            </div>
        ))
      }
    </GridCarousel>
  
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--hide-custom-scrollbar

## Custom Arrows

To Customize Arrows or to add own arrows, need to pass `customArrows` prop.


```javascript
 import GridCarousel from '@yoge-shource/grid-carousel-react';
   
   import Arrow from '---your arrow---'
   
    First Way
    
    <GridCarousel
      itemComponent={CarouselItem} // your component
      carouselData={gridCarouselMockData}
      // --- here ---
      customArrows={{
          leftArrow: Arrows, // your Arrow component and do not <Arrow />
          leftArrowProps: {left:'right', square:'square'},  // your Arrow component props
          rightArrow: Arrows, // your Arrow component props
          rightArrowProps:{right:'right', square:'square'} // your Arrow component props
        }
      }
    />
    
    ---- OR ---- 
    Second Way
    
    <GridCarousel
      carouselData={gridCarouselMockData} 
      // --- here ---
      customArrows={{ // double braces important
          leftArrow: Arrows, // your Arrow component and do not <Arrow />
          leftArrowProps: {left:'right', square:'square', onClick:onClickHandler}, 
           // onClick: () => onClickHandler() ---- wrong---- 
            // onClick: onClickHandler---- right----
          rightArrow: Arrows,
          rightArrowProps:{right:'right', square:'square', onClick:onClickHandler}
        }} >
       {
        gridCarouselMockData.length > 0 && 
          gridCarouselMockData.map((item, itemKey) => (
            <div className="carousel-item">
                <CarouselItem item={item}/> // your component
            </div>
        ))
       }
    </GridCarousel>
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--custom-arrows


In side GridCarousel  Above Arrow will render like this
```javascript
      <Arrows right='right', square='square' onClick={()=>onClick()} />
```

## Auto Play or Auto slide

In first way of integration, We need to pass `itemComponent` and `carouselData` as props to GridCarousel, then `GridCarousel` will take this component and loop this component using `carouselData` and while looping, GridCarousel will send item, `...otherprop` as pops to itemComponent.

`In This Way itemComponent and carouselData props are mandatory.`

`Autoplay will stop onHover of the GridCarousel`

```javascript 

   import GridCarousel from '@yoge-shource/grid-carousel-react'
   
    First Way
    
    <GridCarousel
      autoPlay={true} //--- here--
      itemComponent={CarouselItem} // your component
      carouselData={gridCarouselMockData}
    />
    
    ---- OR ---- 
    Second Way
    
    <GridCarousel
      carouselData={gridCarouselMockData}
       autoPlay={true} //--- here--
      >
      {
        gridCarouselMockData.length > 0 && 
          gridCarouselMockData.map((item, itemKey) => (
            <div className="carousel-item">
                <CarouselItem item={item}/> // your component
            </div>
        ))
      }
    </GridCarousel>
```

or visit https://dvyogesh.github.io/lerna-starter/?path=/story/design-system-gridcarousel--auto-play-or-auto-slide


## LICENSE

MIT
