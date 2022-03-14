import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { useRouteData } from 'react-static';
import { useState } from 'react';
import { Link } from 'components/Router'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    //justifyContent: 'space-around',
    //justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
  },
  faculty: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  facultyItem: {
    display: 'flex',
  },
  facultyItemItem: {
    padding: '20px'
  },
  asso_faculty: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  PhD_Candidate: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  master_Candidate: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: '100px',
    height: '100px',
  },
  card_root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function People(){
    const classes = useStyles();
    const data = { 
      'Faculty': [
          {'id': 1, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 2, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 3, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'}
                 ],
      'Associated Faculty': [
          {'id': 1, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 2, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 3, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'}
                 ],
      'phD': [
          {'id': 1, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 2, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 3, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'}        
                 ],
      'Master': [
          {'id': 1, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 2, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'},
          {'id': 3, 'name':'杜晓宇','eng_name':'XiaoyuDu','phone': '123456789','email': '111@njust.edu.cn','avatar': "../users/static/avatar/%s' % account",'page':'个人主页链接'}
                 ]
    };
    const faculty = data['Faculty'];
    const asso_faculty = data['Associated Faculty'];
    const phD = data['phD'];
    const Master = data['Master'];
    const theme = useTheme();
    // const { people, image } = useRouteData()

    // console.log(people)

    // const src = Buffer.from(image, "binary");

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              PEOPLE
            </Typography>
          </div>
        </div>
        <div className={classes.faculty}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              FACULTY
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {faculty.map(post => (
          <div className={classes.facultyItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.cover}
                  // image={`data:image/jpg;charset=utf-8;base64,${src}`}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      <Link to={`/people/user/${post.id}/`}>{post.eng_name}</Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        <div className={classes.asso_faculty}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              Associated Faculty
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {asso_faculty.map(post => (
          <div className={classes.facultyItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.cover}
                  //image={`data:image/jpeg;charset=utf-8;base64,${base64}`}
                  image="000001.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {post.eng_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        <div className={classes.PhD_Candidate}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              Ph.D Candidate
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {phD.map(post => (
          <div className={classes.facultyItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.cover}
                  image="000001.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {post.eng_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        <div className={classes.master_Candidate}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
              Master Candidate
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {Master.map(post => (
          <div className={classes.facultyItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <CardMedia
                  className={classes.cover}
                  image="000001.jpg"
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {post.eng_name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
}

export default People