import React from 'react';
import { ArrowsMain } from './styles'
const Arrows = ({ left, right, onClick, square }) => (
    <ArrowsMain className={left ? 'arrow-left' : 'arrow-right'} left={left} right={right} onClick={onClick} square={square}>
        <div className="arrow">
            {
                right && (
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>)
            }
            {
                left && (
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </svg>
                )
            }
        </div>
    </ArrowsMain>
)


export default Arrows;