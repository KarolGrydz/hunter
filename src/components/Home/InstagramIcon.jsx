import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import insta from '../../assets/img/instagram-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: '9999',
    color: '#fff',
    right: '0',
    top: '60vh',
    background: `url(${insta})`,
    height: '35px',
    width: '35px',
    [theme.breakpoints.down('sm')]: {
      top: '70vh',
    },
  },
}));

const InstagramIcon = () => {
  const classes = useStyles();

  return (
    <a href="https://www.instagram.com/hunterpolkowice">
      <Box className={classes.root} />
    </a>
  );
};

export default InstagramIcon;
