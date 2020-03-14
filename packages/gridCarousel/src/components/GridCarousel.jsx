import React, { useRef, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CarouselMainContainer, DotItem, DotItemActive } from './styles';
import Arrows from './Arrows';

const GridCarousel = ({...props }) => {
    const {
        itemComponent,
        ItemComponent = itemComponent,
        carouselData = [],
        numberOfItemToScroll = 4,
        numberOfCardsToShow,
        otherProps,
        hideArrowsOnEnd = false,
        customScrollbar,
        children,
        customArrows={},
        autoPlay,
        dots
    } = props
    const {leftArrow,leftArrowProps, rightArrow, rightArrowProps} = customArrows
    const arrowOnClick  = (arrowProp) => {
        const {onClick}=arrowProp
        if(onClick)onClick()
    }

    const carouselRowRef = useRef();
    const scrollBarRef = useRef()
    const arrowAutoplayRef = useRef()
    const [showRightArrow, setShowRightArrow] = useState(false)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [scrollIntoViewElm, setScrollIntoViewElm] = useState(false)
    
    

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
        moveDots()
    }

    const moveDots = () => {
        setTimeout(()=>{
            setScrollIntoViewElm([...carouselRowRef.current.querySelectorAll(`[id*="_gc"]`)])
            scrollIntoViewElm.forEach((elm)=>{elm.isActive = !elm.isActive||false})
            setScrollIntoViewElm([...scrollIntoViewElm])
        }, 900)
    }

    const isReachedLeftEnd = () => {
        carouselRowRef.current = carouselRowRef.current || {}
        const { current:{scrollLeft} } = carouselRowRef;
        (scrollLeft === 0) ? setShowLeftArrow(false) : setShowLeftArrow(true)
    }

    const isReachedRightEnd = () => 
    rightEnd() ? setShowRightArrow(false) : setShowRightArrow(true)


    const rightEnd = () => {
        carouselRowRef.current = carouselRowRef.current || {}
        const { current: { scrollLeft, scrollWidth, clientWidth } } = carouselRowRef;
        const actualWidth = scrollWidth - clientWidth;
        if (scrollLeft === actualWidth || scrollLeft + 20 > actualWidth) {
            return true
        } else {
            return false
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
        if (customScrollbar) createScrollbar();
       
    }, [carouselData.length, numberOfItemToScroll])


    useEffect(()=>{
        if(autoPlay){
            arrowAutoplayRef.current=arrowAutoplayRef.current || {}
           arrowAutoplayRef.current.intervel = setInterval(makePlay, 1000) 
            function makePlay(){
                rightEnd() ? clearInterval(arrowAutoplayRef.current.intervel) : scroll(1);
            }
        } 
         () => clearInterval(arrowAutoplayRef.current.intervel)
    },[])

    const rowMouseHover = () => {
        arrowAutoplayRef.current = arrowAutoplayRef.current || {}
        clearInterval(arrowAutoplayRef.current.intervel)
    }

    const checkInView = (element) => {
        const container = carouselRowRef.current;
        const contWidth = container.clientWidth;
        const position = element && element.getBoundingClientRect()
        if(position.left >= 0 && position.left <= contWidth) {
            return true
        }
        return false
    }

    useEffect(()=>{
        setScrollIntoViewElm([...carouselRowRef.current.childNodes])
    }, [])

    const dotOnClickHandle = (viewElement) => {
        viewElement && viewElement.scrollIntoView();
        moveDots()  
    }
   

    const settings = {
        numberOfCardsToShow
    }

    return (
        <CarouselMainContainer {...settings}>
            <p>GridCarousel</p>
            <div className="carousel-row-wrapper" onMouseOver={rowMouseHover}>
                <div
                    className="carousel-row"
                    ref={carouselRowRef}
                    onScroll={moveScrollBar}>
                    {
                       !children && carouselData.length > 0 ?
                        carouselData.map((item, itemKey) => (
                            <div
                                key={`${itemKey + 1}_gc`}
                                className="carousel-item" id={`${itemKey}_gc`}>
                                <ItemComponent
                                    item={item}
                                    {...otherProps}
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
                                (showLeftArrow && leftArrow) ? 
                                leftArrow({
                                    ...leftArrowProps,
                                    onClick:()=>{
                                        scroll(-1);
                                        arrowOnClick(leftArrowProps)
                                    }
                                    }) : showLeftArrow &&  (
                                    <Arrows onClick={() => scroll(-1)} left />
                                )
                            }
                            {
                                (showRightArrow && rightArrow) ?
                                rightArrow({
                                    ...rightArrowProps,
                                    onClick:()=>{
                                        scroll(1);
                                        arrowOnClick(rightArrowProps)
                                    }}) : showRightArrow && (
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
            {
                dots && scrollIntoViewElm &&
                    <ul className="dots-wrapper">
                    {
                         scrollIntoViewElm.map((viewElement, dotIndex)=>(
                             <Fragment key={`${dotIndex+1}_gc`}>
                                 {
                                     viewElement &&
                                     checkInView(viewElement) &&(
                                        <DotItemActive
                                        
                                        className={`dot-item ${viewElement &&
                                            checkInView(viewElement) ? 'active':'' }`}
                                        onClick={()=> dotOnClickHandle(viewElement)}>
                                        <button className="dot-button" />
                                    </DotItemActive>

                                     )
                                     

                                 }
                                 {
                                     viewElement && !checkInView(viewElement) &&(
                                        <DotItem
                                        className="dot-item"
                                        onClick={()=> dotOnClickHandle(viewElement)}>
                                        <button className="dot-button" />
                                    </DotItem>

                                     )
                                     
                                 }
                             </Fragment>
                            // <DotItem
                            //     key={`${dotIndex+1}_gc`}
                            //     className={`dot-item ${viewElement &&
                            //         checkInView(viewElement) ? 'active':'' }`}
                            //     onClick={()=> dotOnClickHandle(viewElement)}>
                            //     <button className="dot-button" />
                            // </DotItem>
                        ))
                    }
                    </ul>
            }
        </CarouselMainContainer>
    )
}



GridCarousel.propTypes = {
   itemComponent: PropTypes.func,
    // ItemComponent = itemComponent,
    carouselData: PropTypes.array,
    numberOfItemToScroll:PropTypes.number,
    numberOfCardsToShow: PropTypes.number,
    otherProps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    hideArrowsOnEnd: PropTypes.bool,
    customScrollbar: PropTypes.bool,
    children: PropTypes.node,
    customArrows: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    autoPlay: PropTypes.bool,
    dots:PropTypes.bool,
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
    numberOfCardsToShow: 3,
    /**
      Avatar falls back to the user's initial when no image is provided. 
      Supply a `username` and omit `src` to see what this looks like.
      */
    username: 'PropTypes.string',
    hideArrowsOnEnd: false,
    customScrollbar: true,
    autoPlay: false,
    dots: false
};


export default GridCarousel;
