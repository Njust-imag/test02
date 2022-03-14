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
    'journal': [
        {'id':1,'author':'作者列表','name':'论文题目','journalName':'期刊名称','dat':'2020-06-07','citation':'11次','ccf':'A区','link':'论文链接'},
        {'id':2,'author':'作者列表','name':'论文题目','journalName':'期刊名称','dat':'2020-06-07','citation':'11次','ccf':'A区','link':'论文链接'},
        {'id':3,'author':'作者列表','name':'论文题目','journalName':'期刊名称','dat':'2020-06-07','citation':'11次','ccf':'A区','link':'论文链接'},
        {'id':4,'author':'作者列表','name':'论文题目','journalName':'期刊名称','dat':'2020-06-07','citation':'11次','ccf':'A区','link':'论文链接'},
        {'id':5,'author':'作者列表','name':'论文题目','journalName':'期刊名称','dat':'2020-06-07','citation':'11次','ccf':'A区','link':'论文链接'}
      ]
};
const rows = data['journal'];

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

export default function Journal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.table_container}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Author</StyledTableCell>
                    <StyledTableCell align="right">JournalName</StyledTableCell>
                    <StyledTableCell align="right">dat</StyledTableCell>
                    <StyledTableCell align="right">Citation</StyledTableCell>
                    <StyledTableCell align="right">ccf</StyledTableCell>
                    <StyledTableCell align="right">link</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                        {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.author}</StyledTableCell>
                    <StyledTableCell align="right">{row.journalName}</StyledTableCell>
                    <StyledTableCell align="right">{row.dat}</StyledTableCell>
                    <StyledTableCell align="right">{row.citation}</StyledTableCell>
                    <StyledTableCell align="right">{row.ccf}</StyledTableCell>
                    <StyledTableCell align="right">{row.link}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </div>
  );
}
