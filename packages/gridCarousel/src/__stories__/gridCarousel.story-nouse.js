import React from 'react';
import CarouselItem from '../components/CarouselItem'
import gridCarouselMockData from '../../../../public/__mock__/gridCarouselMockData'
import GridCarousel from '..';

export default {
  title: 'Design System|GridCarousel',

  parameters: {
    component: GridCarousel,
    componentSubtitle: `GridCarousel  is a powerful and multi-functional lightweight, 
    flexible ES6 JavaScript slider/carousel library that helps you create responsive and touch-enabled sliders with fast and performant CSS3 transitions.
    it helps you create a highly customizable, fully responsive, mobile (only mobile) swipe-friendly content carousel/slider with lots of useful functionalities for modern web/mobile designs.`
  },
};


export const basic = () => (
    <GridCarousel
      itemComponent={CarouselItem}
      carouselData={gridCarouselMockData}
    />
);

basic.story = {
  parameters: { docs: { storyDescription: '4 sizes are supported.' } },
};
