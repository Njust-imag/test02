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
    'status':1,
    'monograph': [
        {'id':1,'editor':'编辑','name':'学术专著题目','dat':'2020-06-07'},
        {'id':2,'editor':'编辑','name':'学术专著题目','dat':'2020-06-07'},
        {'id':3,'editor':'编辑','name':'学术专著题目','dat':'2020-06-07'},
        {'id':4,'editor':'编辑','name':'学术专著题目','dat':'2020-06-07'},
        {'id':5,'editor':'编辑','name':'学术专著题目','dat':'2020-06-07'},
      ]
};
const rows = data['monograph'];

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

export default function Monograph() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.table_container}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell align="right">editor</StyledTableCell>
                    <StyledTableCell align="right">name</StyledTableCell>
                    <StyledTableCell align="right">dat</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.id}</StyledTableCell>
                    <StyledTableCell align="right">{row.editor}</StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.dat}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}
