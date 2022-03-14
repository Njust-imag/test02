import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  introduction: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'space-around'
  },
  news: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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

    return (
      <div className={classes.root}>

        <div className={classes.introduction}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              IMAG@NJUST
            </Typography>
          </div>
          <div>
            Welcome to Intelligent Media Analysis Group (IMAG) in School of Computer Science, 
            Nanjing University of Science and Technology. 
            Our team focuses on analyzing the big media and aims to develop frontier technologies to address the analysis, 
            understanding and management tasks of the big multimedia data. Besides, 
            we also pay attention to the real-world applications, such as multimedia retrieval, 
            face recognition and recommendation. For more information about our work, please refer to the publication page.
          </div>
        </div>

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

        <div className={classes.contact}>
          <div className={classes.contact_item}>
            <div>
              <Typography gutterBottom variant="h5" style={{color:"#00adb5"}}>
                CONTACT US
              </Typography>
            </div>
            <div>
              南京理工大学
            </div>
            <div>
              南京市
            </div>
            <div>
              玄武区
            </div>
          </div>
          <div className={classes.contact_item}>
            <div>
            <Typography gutterBottom variant="h5" style={{color:"#00adb5"}}>
              联系方式
            </Typography>
            </div>
            <div>
              Email: srlittle@pitt.edu
            </div>
            <div>
              Phone: 412-624-9614
            </div>
            <div>
              Fax: 412-624-9639
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home