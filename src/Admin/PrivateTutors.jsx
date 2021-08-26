import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

  const rows = [
   {name: 'PrivateTutors', number: '9145742175', Email: 'mk2334332@gmail.com', qualification: 'BCA', MajorSubject: 'Maths computer science' },
   {name: 'PrivateTutors', number: '9145742175', Email: 'mk2334332@gmail.com', qualification: 'BCA', MajorSubject: 'Maths computer science' },
   {name: 'PrivateTutors', number: '9145742175', Email: 'mk2334332@gmail.com', qualification: 'BCA', MajorSubject: 'Maths computer science' },
   {name: 'PrivateTutors', number: '9145742175', Email: 'mk2334332@gmail.com', qualification: 'BCA', MajorSubject: 'Maths computer science' },
   {name: 'PrivateTutors', number: '9145742175', Email: 'mk2334332@gmail.com', qualification: 'BCA', MajorSubject: 'Maths computer science'} 
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  function PrivateTutors({data}) {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Number</StyledTableCell>
              <StyledTableCell align="center">Class</StyledTableCell>
              <StyledTableCell align="center">Qualification</StyledTableCell>
              <StyledTableCell align="center">Major Subject</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{index+1}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                <StyledTableCell align="center">{row.class}</StyledTableCell>
                <StyledTableCell align="center">{row.qualification}</StyledTableCell>
                <StyledTableCell align="center">{row.subject}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

 export default PrivateTutors;