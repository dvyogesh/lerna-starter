import styled from 'styled-components';

const CarouselMainContainer = styled.div`
    position: relative;
    .carousel-row-wrapper{
        overflow: hidden;
    }
    .carousel-row {
        scroll-behavior: smooth;
        display:flex;
        overflow: scroll;
        -ms-overflow-style: none;
        ::-webkit-scrollbar {
            display: none;
          }
        .carousel-item{
            flex: 0 0 ${props => 100 / props.numberOfCardsToShow}%;
        }
        img{
            max-width:100%;
        }
    }
    .scrollbar-panel{
        position: relative;
        background-color: rgba(127, 127, 127, 0.38);
        height: 5px;
        .scrollbar{
            position: absolute;
            left:0;
            top: 0;
            width:5%;
            height: 5px;
            background-color: red;
        }
    }
`;

const CarouselItemWrapper = styled.div`
    margin: 5px;
    border: thin solid #ccc;
    border-radius: 3px;
    text-align: center;
    img{
        height:200px;
    }
`;

const ArrowsMain = styled.div`
    position: absolute;
    background-color: #fff;
    color: #757575;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 4px 8px 0 rgba(0,0,0,0.20);
    height: 36px;
    width: 36px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #dfe1e5;
    top: 50%;
    ${props=>props.left ? 'left:-1%;' : 'right: -1%;'}
    .arrow {
        width: 24px;
        height: 24px;
        margin: auto;
        line-height: 50px;
        
        svg {
            font-size:16px;   
            color: #757575;
            fill: currentColor;
        }
    }
`;

export {
    CarouselMainContainer,
    CarouselItemWrapper,
    ArrowsMain
};