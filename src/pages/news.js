import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useRouteData } from 'react-static';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  news: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
}));


function Home(){
    const classes = useStyles();


    const data = { 
      'status':1,
      'news': [
          {'id':1,'title':'新闻标题','publisher':'发布人','content':'新闻内容','dat':'2020-06-07','classify':'新闻类别','content':'新闻内容','photo':'新闻图片保存位置'},
          {'id':2,'title':'新闻标题','publisher':'发布人','content':'新闻内容','dat':'2020-06-07','classify':'新闻类别','content':'新闻内容','photo':'新闻图片保存位置'},
          {'id':3,'title':'新闻标题','publisher':'发布人','content':'新闻内容','dat':'2020-06-07','classify':'新闻类别','content':'新闻内容','photo':'新闻图片保存位置'},
          {'id':4,'title':'新闻标题','publisher':'发布人','content':'新闻内容','dat':'2020-06-07','classify':'新闻类别','content':'新闻内容','photo':'新闻图片保存位置'},
        ]
    }

    const news = data['news']

    // const {news} = useRouteData();
    // console.log(news)
    console.log(news)

    
    return (
      <div className={classes.root}>


        <div className={classes.news}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              LATEST NEWS
            </Typography>
          </div>
          <div>
            <ul>
              {news.map(post => (
              <li key={post.id}>
                {post.content}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Home