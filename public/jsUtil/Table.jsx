import React from 'react';
import { TableStyleWrapper, TableTdStyle } from './styles';

const Table = ({ data: { columns, rows } }) => {

    const tableHeaders = (<thead>
        <tr >
            {columns.map(function (column, colIndex) {
                return <th key={`${colIndex + 1}_col`}>{column.title}</th>;
            })}
        </tr>
    </thead>);

    const tableBody = rows.map(function (row, rowIndex) {
        return (
            <tr key={`${rowIndex + 1}_row`}>
                {columns.map(function (column, rowColIndex) {
                    return (
                        <TableTdStyle
                            key={`${rowColIndex + 1}_rowCol`}
                            width={
                                columns[rowColIndex] ? `${columns[rowColIndex].width}px` : ''
                            }>
                        {row[column.title]}
                        </TableTdStyle>);
                })}
            </tr>);
    });

    // Decorate with Bootstrap CSS
    return (
        <TableStyleWrapper>
            <table className="table table-bordered table-hover" width="100%">
                {tableHeaders}
                <tbody>{tableBody}</tbody>
            </table>
        </TableStyleWrapper>

    )
}
export default Table;
