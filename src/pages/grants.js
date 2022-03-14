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
    'project': [
        {'id':1,'principal':'唐金辉','name':'国家自然科学基金重点项目“面向大数据环境的高通量视觉计算”（批准号：61732007）','level':'国家级项目','startTime':'2020-06-07','deadline':'2020-12-07','cost':'11万'},
        {'id':2,'principal':'项目负责人','name':'项目名称','level':'省级项目','startTime':'2020-06-07','deadline':'2020-12-07','cost':'2万'},
        {'id':3,'principal':'项目负责人','name':'项目名称','level':'国家级项目','startTime':'2020-06-07','deadline':'2020-12-07','cost':'13万'},
        {'id':4,'principal':'项目负责人','name':'项目名称','level':'国家级项目','startTime':'2020-06-07','deadline':'2020-12-07','cost':'11万'},
        {'id':5,'principal':'项目负责人','name':'项目名称','level':'国家级项目','startTime':'2020-06-07','deadline':'2020-12-07','cost':'12万'},
      ]
};
const rows = data['project'];
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
  },
  text:{
    width: '80%',
    height: '40.19px',
    color:"#444444",
    textAlign:'left',
    lineHeight:'30px',
    wordBreak:'break-all',
    fontSize:'16px',
    margin:'2px',
    paddingLeft:'18%',
    paddingRight:'15%'
  },
  head:{
    color:"#333333",
    // textAlign:'center',
    paddingLeft:'40%',
    paddingRight:'15%'
  }
});

export default function Grants() {
  const classes = useStyles();
  const grant_list=(row,index)=>{
     const grant_list=(index+1)+'.'+row.name+','+row.startTime+'-'+row.deadline+',(主持)'+row.principal
     return grant_list
  }
  return (

    <div>
    <h1 className={classes.head}>Grants</h1>
    {rows.map((row,index)=>(
      <p className={classes.text}>{grant_list(row,index)}</p>
    ))}
  </div>
  );
}
