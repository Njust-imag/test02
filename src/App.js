import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import Navbar from './components/Navbar'
import Dynamic from './containers/Dynamic'
import { useState } from 'react'
import { Route } from 'react-router'
import Error from './pages/404'
import Grants from './pages/grants'
import News from './pages/news'
import {
  makeStyles,
} from "@material-ui/core";


import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-start',
    //alignContent: 'space-around',
    // alignItems: 'flex-end',
    // width: '100%',
    height: '100vh',
  },

  content: {
    flex: 1,
    height: '100vh',
  },

  navbar: {
    // display: 'flex',
  }

}));

function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <Root>
      <div className="App">
        <div className={classes.page}>
          <div className={classes.navbar}>
            <Navbar />
          </div>

          <div className={classes.content}>
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Dynamic path="dynamic" />
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default App
