import styled from 'styled-components';
import React from 'react';

const StyledMainPara = styled.h2`
font-size: 20px;
line-height: 28px;
margin-bottom: 24px;
font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-overflow-scrolling: touch;
font-weight: 400;
color: rgba(51,51,51,0.75);
`
const StyledSubPara = styled.h2`
font-size: 18px;
line-height: 26px;
margin-bottom: 24px;
font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-overflow-scrolling: touch;
font-weight: 400;
color: rgba(51,51,51,0.75);
`
const HeadingFourWrapper = styled.h4`
font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
margin: 0;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-overflow-scrolling: touch;
margin: 20px 0 12px;
padding: 0;
cursor: text;
color: #333333;
font-size: 20px;
`

const CodeWrapperStyle= styled.div`
color: black;
background: rgb(245, 242, 240);
text-shadow: white 0px 1px;
font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
overflow-wrap: normal;
line-height: 1.5;
tab-size: 4;
hyphens: none;
padding: 1em;
margin: 0.5em 0px;
overflow: auto;
.codeIn {
    color: black;
    background: rgb(245, 242, 240);
    text-shadow: white 0px 1px;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    overflow-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    font-size: 16px;
}
`

export {
    StyledMainPara,
    HeadingFourWrapper,
    CodeWrapperStyle,
    StyledSubPara
}
