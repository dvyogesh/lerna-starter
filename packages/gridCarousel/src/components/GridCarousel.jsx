import React, { useRef, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CarouselMainContainer } from './styles';
import Arrows from './Arrows';

const GridCarousel = ({ ...props }) => {
    const {
        itemComponent,
        ItemComponent = itemComponent,
        carouselData = [],
        numberOfItemToScroll = 4,
        numberOfCardsToShow,
        customProps,
        hideArrowsOnEnd = false,
        customScrollbar,
        children

    } = props
    const carouselRowRef = useRef();
    const [showRightArrow, setShowRightArrow] = useState(false)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const scrollBarRef = useRef()

    const scroll = direction => {
        const { current } = carouselRowRef
        const scrollWidth = (current.scrollWidth / carouselData.length) * numberOfItemToScroll
        current.scrollLeft += scrollWidth * direction
        if (!hideArrowsOnEnd) {
            setTimeout(()=>{
                isReachedLeftEnd()
                isReachedRightEnd()
            }, 800)
            
        }
    }

    const moveScrollBar = () => {
        const scrollbar = scrollBarRef.current;
        const { current: { scrollLeft, scrollWidth, offsetWidth } } = carouselRowRef;
        const scrollbarPercent = scrollLeft / scrollWidth;
        const scrollbarPosition = scrollbarPercent * offsetWidth
        if (scrollbar && scrollbar.style) scrollbar.style.left = `${scrollbarPosition}px`
    }

    const isReachedLeftEnd = () => {
        const { current } = carouselRowRef;
        (current.scrollLeft === 0) ? setShowLeftArrow(false) :
            setShowLeftArrow(true)


    }

    const isReachedRightEnd = () => {
        const { current: { scrollLeft, scrollWidth, clientWidth } } = carouselRowRef;
        const actualWidth = scrollWidth - clientWidth;
        if (scrollLeft === actualWidth || scrollLeft + 20 > actualWidth) {
            setShowRightArrow(false)
        } else {
            setShowRightArrow(true)
        }

    }

    useEffect(() => {
        const checkRightEndOnMount = () => {
            carouselData.length > numberOfCardsToShow ? setShowRightArrow(true) :
                setShowRightArrow(false)
        }
        const createScrollbar = () => {
            const { current } = scrollBarRef
            const scrollbarWidth = dynamicScrollbarwidth()
           
            if (current && scrollbarWidth /
                carouselRowRef.current.offsetWidth < 1) {

                current.style.width = `${scrollbarWidth}px`
            }
        }
        const dynamicScrollbarwidth = () => {
            const { current: { offsetWidth, scrollWidth } } = carouselRowRef;
            const visibleRatio = offsetWidth / scrollWidth
            return visibleRatio * offsetWidth;
        }
        checkRightEndOnMount()
        isReachedLeftEnd()
        if (customScrollbar) createScrollbar()
    }, [carouselData.length, numberOfItemToScroll])

    const settings = {
        numberOfCardsToShow
    }

    return (
        <CarouselMainContainer {...settings}>
            <p>GridCarousel</p>
            <div className="carousel-row-wrapper">
                <div
                    className="carousel-row"
                    ref={carouselRowRef}
                    onScroll={moveScrollBar}>
                    {
                       !children && carouselData.length > 0 ?
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
                        :
                        <Fragment>{children}</Fragment>
                    }
                </div>
                {
                    !hideArrowsOnEnd && (
                        <div className="arrows-wrapper">
                            {
                                showLeftArrow && (
                                    <Arrows onClick={() => scroll(-1)} left />
                                )
                            }
                            {
                                showRightArrow && (
                                    <Arrows onClick={() => scroll(1)} right />
                                )
                            }
                        </div>
                    )
                }

            </div>
            {
                customScrollbar === true && (
                    <div className="custom-scrollbar">
                        <div className="scrollbar-panel">
                            <div
                                className="scrollbar"
                                ref={scrollBarRef} />
                        </div>
                    </div>
                )
            }


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
    numberOfItemToScroll: 2,
    numberOfCardsToShow: 4,
    /**
      Avatar falls back to the user's initial when no image is provided. 
      Supply a `username` and omit `src` to see what this looks like.
      */
    username: 'PropTypes.string',
    hideArrowsOnEnd: false,
    customScrollbar: true

};


export default GridCarousel;
