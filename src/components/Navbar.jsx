import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Facebook, YouTube } from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors';

import menu from '../constants/menu';
import HunterLogo from '../assets/img/logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.primary.dark}`,
    fontWeight: 600,
    paddingTop: 5,
    paddingBottom: 5,
  },
  nav: {
    flex: '1 1 0',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  menuItem: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    color: `${theme.palette.primary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 100ms ease-in-out',
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
    },
  },
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    opacity: '.25',
    backgroundColor: theme.palette.primary.contrastText,
  },
  fbIcon: {
    display: 'flex',
    color: blue[300],
    '&:hover': {
      color: blue[400],
    },
  },
  ytIcon: {
    display: 'flex',
    marginRight: theme.spacing(2),
    color: red[300],
    '&:hover': {
      color: red[400],
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      className={classes.root}
    >
      <Toolbar>
        <Link to="/">
          <Avatar alt="Logo" src={HunterLogo} className={classes.logo} />
        </Link>
        <nav className={classes.nav}>
          {menu.map(({ id, link, label }) => (
            <Link key={id} className={classes.menuItem} to={link}>
              {label}
            </Link>
          ))}
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <Link href="https://www.youtube.com/user/grupahunter" target="blank" className={classes.ytIcon}>
            <YouTube />
          </Link>
          <Link href="https://www.facebook.com/grupahunter" target="blank" className={classes.fbIcon}>
            <Facebook />
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
