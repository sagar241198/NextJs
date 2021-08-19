import { Center } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import COLUMNS from './Column';
import MOCK_DATA from './MOCK_DATA.json'

const BasicTable = () => {
    const columns = useMemo(() => { return (COLUMNS) });
    const data = useMemo(() => { return (MOCK_DATA) });
    const tableInstance = useTable({ columns, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance
    return (
        <>
            <Center bg="tomato" h="50px" color="white">
                User details
            </Center>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups) => {
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((column) => {
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            })}
                        </tr>
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default BasicTable;