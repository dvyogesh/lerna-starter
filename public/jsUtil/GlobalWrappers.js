import React from 'react';
import {CodeWrapperStyle, MessageWrappeStyle} from '../styles/globalStyle'
const CodeWrapper = ({children}) => (<CodeWrapperStyle>{children}</CodeWrapperStyle>)
// const MessageWrapper = ({children}) => (<MessageWrappeStyle>{children}</MessageWrappeStyle>)

export {
    CodeWrapper,
    // MessageWrapper
}