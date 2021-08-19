import { Center, Button, Box } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import COLUMNS from './Column';
import MOCK_DATA from './MOCK_DATA.json';

const Pagination = () => {  
    const columns = useMemo(() => { return (COLUMNS) });
    const data = useMemo(() => { return (MOCK_DATA) });
    const tableInstance = useTable({ columns, data }, usePagination);
    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, prepareRow } = tableInstance
    return (
        <>
            <Center bg="" h="50px" color="white" m={1}>
                User details
            </Center>
            <table {...getTableProps()}>
                <thead>
                    {/* {headerGroups.map((headerGroups) => {
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((columns) => {
                                <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                            })}
                        </tr>
                    })} */}
                    <tr>
                        {columns.map((data, index) => {
                            return (
                                <th key={index}>{data.Header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
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
            <Box m={2} pl={2}>
                <Center>
                    <Button colorScheme="teal" variant="outline" onClick={() => { previousPage() }} m={2}>previous</Button>
                    <Button colorScheme="teal" variant="outline" onClick={() => { nextPage() }} m={2}>Next</Button>
                </Center>
            </Box>
        </>
    )
}
export default Pagination;