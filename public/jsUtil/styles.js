import styled from 'styled-components';

const TableStyleWrapper = styled.div`
    table{
        margin-top:5px;
        border-collapse: collapse;
        border-spacing: 0;
        color: #333333;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        width: 100%;
        margin-top: 25px;
        margin-bottom: 40px;
        margin-left: 1px;
        margin-right: 1px;
        box-shadow: rgba(0,0,0,0.10) 0 1px 3px 1px, rgba(0,0,0,0.065) 0 0 0 1px;
        border-radius: 4px;
        thead{
            border-bottom: thin solid #e6e6e6;
            th{
                padding:10px;
                color: rgba(51,51,51,0.75);
            }
        }
        tbody{
            td:first-of-type {
                padding-left: 20px;
                font-weight: bold;
            }
        }
        td {
            padding-top: 16px;
            padding-bottom: 16px;
            border-bottom: thin solid #e6e6e6;
        }
    }
`;
const TableTdStyle = styled.td`
    width:${props => props.width}px;
    &:first-of-type {
        max-width:${props => props.width};
    }
`;

export {
    TableStyleWrapper,
    TableTdStyle
}