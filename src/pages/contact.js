import React from 'react'

import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
      alignItems: 'center'
    },
    title: {
        padding: '20px'
    },
    content: {
        width: '50%',
    }
  }));

function Contact(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography gutterBottom variant="h4" style={{color:"#000000"}}>
                    Contact us
                </Typography>
            </div>
            <div className={classes.content}>
                <Typography gutterBottom style={{color:"#000000"}}>
                    Hi There,
                </Typography>
                <Typography gutterBottom style={{color:"#000000"}}>
                    We are looking forward to hearing from you.
                </Typography>
                <Typography gutterBottom style={{color:"#000000"}}>
                    Please feel free to get in touch via the form below, we will get back to you as soon as possible.
                </Typography>
                <Typography gutterBottom style={{color:"#000000"}}>
                    A Great Company Name
                </Typography>
                <Typography gutterBottom style={{color:"#000000"}}>
                    123 Main St,
                </Typography>
                <Typography gutterBottom style={{color:"#000000"}}>
                    Warwick, RI 02889
                </Typography>
                <Typography gutterBottom style={{color:"#000000"}}>
                    718.555.00627
                </Typography>
            </div>
        </div>
    )
}

export default Contact