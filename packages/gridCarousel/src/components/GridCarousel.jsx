import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { CarouselMainContainer } from './styles';
import Arrows from './Arrows';

const GridCarousel = ({ ...props }) => {
    const {
        itemComponent,
        ItemComponent = itemComponent,
        carouselData = [],
        numberOfItemToScroll,
        customProps

    } = props
    const carouselRowRef = useRef();


    const scroll = direction => {
        const {current} = carouselRowRef
        const scrollWidth = (current.scrollWidth / carouselData.length) * numberOfItemToScroll
        current.scrollLeft += scrollWidth * direction
        console.log(direction)
    }

    console.log(carouselData)
    return (
        <CarouselMainContainer>
            <p>GridCarousel</p>
            <div className="carousel-row-wrapper">
                <div className="carousel-row" ref={carouselRowRef}>
                {
                    carouselData.length > 0 &&
                    carouselData.map((item, itemKey) => (
                        <div
                            key={`${itemKey + 1}_gc`}
                            className="carousel-item">
                            <ItemComponent
                                item={item}
                                {...customProps}
                            />
                        </div>
                    ))
                }
                </div>
                <div className="arrows-wrapper">
                    <Arrows onClick={()=>scroll(-1)} left/>
                    <Arrows onClick={()=>scroll(1)} right/>
                </div>
            </div>
            

        </CarouselMainContainer>
    )
}



GridCarousel.propTypes = {
    /**
      Use the loading state to indicate that the data Avatar needs is still loading.
      */
    loading: PropTypes.bool,
    /**
      Avatar falls back to the user's initial when no image is provided. 
      Supply a `username` and omit `src` to see what this looks like.
      */
    username: PropTypes.string,
    /**
      The URL of the Avatar's image.
      */
    src: PropTypes.string,
    /**
      Avatar comes in four sizes. In most cases, you'll be fine with `medium`.
      */
    size: PropTypes.oneOf(Object.keys(GridCarousel)),
};


GridCarousel.defaultProps = {
    /**
      Use the loading state to indicate that the data Avatar needs is still loading.
      */
     numberOfItemToScroll: 4,
    /**
      Avatar falls back to the user's initial when no image is provided. 
      Supply a `username` and omit `src` to see what this looks like.
      */
    username: 'PropTypes.string',
    
};


export default GridCarousel;
