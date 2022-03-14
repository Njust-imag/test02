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
    backgroundColor: theme.palette.text.disabled,
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


const data = { 
    'status':0,
    'softwareCopyright': [
        {'id':1,'author':'作者列表','name':'软件著作权题目','times':'2020-06-07'},
        {'id':2,'author':'作者列表','name':'软件著作权题目','times':'2020-06-07'},
        {'id':3,'author':'作者列表','name':'软件著作权题目','times':'2020-06-07'},
        {'id':4,'author':'作者列表','name':'软件著作权题目','times':'2020-06-07'},
        {'id':5,'author':'作者列表','name':'软件著作权题目','times':'2020-06-07'}
      ]
};
const rows = data['softwareCopyright'];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%'
  },
  table_container: {
      width: '80%',
      padding: '30px',
  }
});

export default function Software() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.table_container}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell align="right">author</StyledTableCell>
                    <StyledTableCell align="right">name</StyledTableCell>
                    <StyledTableCell align="right">times</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.id}</StyledTableCell>
                    <StyledTableCell align="right">{row.author}</StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.times}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}
