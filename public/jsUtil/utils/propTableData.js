
import React from 'react';

import { StypledCustomPara } from '../../../../../public/styles/globalStyle';

const tableData = {
    columns: [
        { title: 'Prop', width: 70 },
        { title: 'Type', width: 70 },
        { title: 'Usage', width: 200 },
    ],
    rows: [{
        'Prop': 'itemComponent',
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                We need to pass <code>itemComponent</code> and <code>carouselData</code>
                as props to <code>GridCarousel</code>, then GridCarousel will take this component and loop this
            component using <code>carouselData</code> and while looping, GridCarousel will send <code>item</code>,
            <code>...otherprop</code> as pops to itemComponent.
            </StypledCustomPara>
        ),
        'Type': `Type of React component`,
    }, {
        'Prop': 'carouselData',
        'Type': `Array`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                <code>
                    {`const data=[{},{}];`}
                    <br />
                    {`<GridCarousel carouselData={data} />`}
                </code>
            </StypledCustomPara>
        ),
    }, {
        'Prop': 'numberOfItemToScroll',
        'Type': `Number`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                <code>
                    <br />
                    {`<GridCarousel numberOfItemToScroll={2} />`}
                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'otherProps',
        'Type': `instence of Object || Array`,
        'Usage': '',
    }, {
        'Prop': 'numberOfCardsToShow',
        'Type': `Number`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should be {`carouselData > numberOfCardsToShow `}
                <br />
                <code>
                    {`<GridCarousel numberOfCardsToShow={2} />`}
                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'hideArrowsOnEnd',
        'Type': `Bool`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should be true || false
                <br />
                <code>
                    {`<GridCarousel hideArrowsOnEnd={true} /> // true || false`}
                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'customScrollbar',
        'Type': `Bool`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should be true || false
                <br />
                <code>
                    {`<GridCarousel customScrollbar={true} /> // true || false`}
                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'children',
        'Type': `Type of React children `,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should wrap with  {`<GridCarousel>`}
                <br />
                <code>
                {`<GridCarousel carouselData={gridCarouselMockData} >`}
                    <br />
                    {`gridCarouselMockData.map((item, itemKey) => (`}
                    <br />
                    {`<div className="carousel-item">`}
                    <br />
                    {`       <CarouselItem item={item}/>`}
                    <br />
                    {`</div>))`}
                    <br />
                    <br />
                    {`</GridCarousel>`}

                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'customArrows',
        'Type': `Object`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should wrap with double braces {`customArrows={{}}`}
                <br />
                <code>
                {`<GridCarousel carouselData={gridCarouselMockData}`}<br/>
                &nbsp;{`customArrows={{ //  <-- HERE`}<br/>
                &nbsp;{`  leftArrow: Arrows, // your Arrow component and do not <Arrow />`}<br/>
                &nbsp;{`  leftArrowProps: {left:'right', square:'square'},  // your Arrow component props`}<br/>
                &nbsp;{`  rightArrow: Arrows, // your Arrow component props`}<br/>
                &nbsp; {`rightArrowProps:{right:'right', square:'square'} // your Arrow component props`}<br/>
                &nbsp; {` }}`}<br/>
                {` />`}
                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'autoPlay',
        'Type': `Bool`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should be true || false
                <br />
                <code>
                    {`<GridCarousel autoPlay={true} /> // true || false`}
                </code>
            </StypledCustomPara>),
    }, {
        'Prop': 'dots',
        'Type': `Bool`,
        'Usage': (
            <StypledCustomPara fontSize={14} lineHeight={22}>
                should be true || false
                <br />
                <code>
                    {`<GridCarousel dots={true} /> // true || false`}
                </code>
            </StypledCustomPara>),
    }]
};

export {
    tableData
}