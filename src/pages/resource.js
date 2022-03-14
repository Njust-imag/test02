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
    'resource': [
        {'id':1,'name':'数据资源名','link':'数据资源链接'},
        {'id':2,'name':'数据资源名','link':'数据资源链接'},
        {'id':3,'name':'数据资源名','link':'数据资源链接'},
        {'id':4,'name':'数据资源名','link':'数据资源链接'},
        {'id':5,'name':'数据资源名','link':'数据资源链接'}
      ]
};
const rows = data['resource'];

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

export default function Patent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.table_container}>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>id</StyledTableCell>
                    <StyledTableCell align="right">name</StyledTableCell>
                    <StyledTableCell align="right">link</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.id}</StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
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
