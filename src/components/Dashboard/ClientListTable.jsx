import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

// interface Column {
//   id: 'applicationDate' | 'loanAmount' | 'interestCharged' | 'amountToPay' | 'loanDuration' | 'status' | 'mobilePlaceholder';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number | string) => string;
//   className? : any
// }



// interface Data {
//   applicationDate: string;
//   loanAmount: string;
//   interestCharged: string;
//   amountToPay: string;
//   loanDuration: string;
//   status: string;
//   mobilePlaceholder: string;
// }


const ClientListTable = ({ columns, rows }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <TableContainer sx={{ maxHeight: '80vh', minHeight: '75vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ background: '' }}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        color: 'black',
                                        background: '#fbf6eb',
                                        borderBottom: '3px solid #ddaa33',
                                    }}
                                    className={column.className}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className=''>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={`${row.name}-${index}`}
                                        component={Link}
                                        to={`/client-details`}
                                        style={{ borderLeft: 'none' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#fbf6eb'
                                            e.currentTarget.firstChild.style.borderLeft = '2px solid #ddaa33';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'none'

                                            e.currentTarget.firstChild.style.borderLeft = 'none';
                                        }}
                                    >
                                        {columns.map((column, columnIndex) => {
                                            const value = row[column.id];
                                            const formattedValue =
                                                column.id === 'status' ? value + ' ...' : value;

                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{
                                                        minWidth: column.minWidth,
                                                        fontSize: '14px', // Adjust font size for mobile
                                                        padding:{xs: '8px', md: 5} , // Adjust padding for mobile
                                                    }}
                                                    className={`${column.className}`}
                                                >
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ClientListTable;