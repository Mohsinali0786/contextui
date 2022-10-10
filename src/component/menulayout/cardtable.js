import {Box} from '@mui/material'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

function createData(firstname,projectname,date) {
  return { firstname, projectname, date };
}

const rows = [
  createData('Ahmed', 'Test', '10 Oct 2022'),
  createData('Ahmed', 'Test', '10 Oct 2022'),
  createData('Ahmed', 'Test', '10 Oct 2022'),
];

export default function cardtable(props) {

    const {title,heading1,heading2}=props
  return (
    <Box
    className='cards card-width-3'
    sx={{
    // overflow:'scroll',
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
    <div className='recentfiles-header'>

    <h3 style={{color:'white',textAlign:'left'}}>{title}</h3>
    {/* <SearchIcon sx={{position:'relative',left:'50px',top:'5px',color:'white'}}/> */}
    <input placeholder='Search...'/>
    </div>
    {/* <table bor>
      <tr>
        <th>File Name</th>
        <th>{heading1}</th>
        <th>{heading2}</th>
      </tr>
      <tr>
        <td>Ali</td>
        <td>Test</td>
        <td>10 Oct 2022</td>
      </tr>
      <tr>
        <td>Ali</td>
        <td>Test</td>
        <td>10 Oct 2022</td>
      </tr>
      <tr>
        <td>Ali</td>
        <td>Test</td>
        <td>10 Oct 2022</td>
      </tr>
    </table> */}
    <TableContainer component={Paper} className='tables'>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell >{heading1}</TableCell>
            <TableCell >{heading2}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstname}
              sx={{color:'white' }}
        
            >
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell >{row.projectname}</TableCell>
              <TableCell >{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>

  );
}


 