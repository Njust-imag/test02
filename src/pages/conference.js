import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useRouteData } from 'react-static';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles({
  text:{
    width: '65%',
    height: '60.19px',
    color:"#444444",
    textAlign:'left',
    lineHeight:'30px',
    wordBreak:'break-all',
    fontSize:'16px',
    margin:'5px',
    paddingLeft:'15%',
    paddingRight:'15%'
  },
  head:{
    color:"#333333",
    paddingLeft:'40%',
    paddingRight:'15%'
  }
});

export default function Conference() {
  const classes = useStyles();
  const { conference } = useRouteData()
  const conf_list=(data,index)=>{
      const list='['+(index+1)+']'+data.author+data.name+data.conferenceName
      return list
  }
  console.log(conference.data)
  return (
    <div>
        <h1 className={classes.head}>Conference</h1>
        {conference.data.map((row,index)=>(
          <p className={classes.text}>{conf_list(row,index)}</p>
        ))}
    </div>
  );
}
