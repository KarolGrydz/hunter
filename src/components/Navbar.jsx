import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import menu from '../constants/menu';

import HunterLogo from '../assets/img/logo.jpg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    fontWeight: 600,
  },
  appNav: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    display: 'flex',
    '& a': {
      marginLeft: theme.spacing(2),
      '&:hover': {
        borderBottom: `1px solid ${theme.palette.secondary.dark}`,
      },
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Avatar alt="Logo" src={HunterLogo} className={classes.large} />
          <nav className={classes.appNav}>
            {menu.map(({ id, link, label }) => (
              <Link key={id} variant="button" to={link}>
                {label}
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
