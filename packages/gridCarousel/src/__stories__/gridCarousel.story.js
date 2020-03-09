import React from 'react';
import CarouselItem from '../components/CarouselItem'
import gridCarouselMockData from '../../../../public/__mock__/gridCarouselMockData'
import CarouselStoryWrapper from './styles';
import GridCarousel from '..';

export default {
  title: 'Design System|GridCarousel',

  parameters: {
    component: GridCarousel,
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
};


export const basic = () => (
  <CarouselStoryWrapper>
    <GridCarousel
      itemComponent={CarouselItem}
      carouselData={gridCarouselMockData}
    />
        
  </CarouselStoryWrapper>
);

export const basick = () => (
    <div>
      <GridCarousel>
          
      </GridCarousel>
    </div>
  ); 

basic.story = {
  parameters: { docs: { storyDescription: '4 sizes are supported.' } },
};

basick.story = {
    parameters: { docs: { storyDescription: '4 sizes are supported.' } },
  };