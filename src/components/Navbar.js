import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'components/Router'
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  toolbar_left: { 
    flex: 1,
  },
  toolbar_mid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  
    flex: 4,
  },
  toolbar_mid_item: {

  },
  toolbar_right: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles({ open });
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  }

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };


  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.toolbar}>
          <div className={classes.toolbar_left}>
            <Link to='/' style={navStyle}>
              <Typography variant="h6" className={classes.logoLg}>
                IMAG@NJUST
              </Typography>
            </Link>
          </div>
          <div className={classes.toolbar_mid}>
            <div>
              <Link to='/' style={navStyle}>HOME</Link>
            </div>
            <div>
              <Link to='/people' style={navStyle}>PEOPLE</Link>
            </div>
            <div>
              <Link to='/news' style={navStyle}>NEWS</Link>
            </div>
            <div>
              <Button
                ref={anchorRef}
                style={navStyle}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                PUBLICATION
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem value="0"><Link to='/conference'>Conference</Link></MenuItem>
                          <MenuItem value="1"><Link to='/journal'>Journal</Link></MenuItem>
                          <MenuItem value="2"><Link to='/patent'>Patent</Link></MenuItem>
                          <MenuItem value="3"><Link to='/software'>Software</Link></MenuItem>
                          <MenuItem value="4"><Link to='/monograph'>Monograph</Link></MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <div>
              <Link to='/grants' style={navStyle}>GRANTS</Link>
            </div>
            <div>
              <Link to='/resource' style={navStyle}>RESOURCE</Link>
            </div>
            <div>
              <Link to='/contact' style={navStyle}>CONTACT US</Link>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
