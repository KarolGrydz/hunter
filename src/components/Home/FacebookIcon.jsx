import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import fb from '../../assets/img/fb.svg';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    zIndex: '9999',
    color: '#fff',
    right: '0',
    top: '50vh',
    background: `url(${fb})`,
    height: '92px',
    width: '35px',
  },
}));

const FacebookIcon = () => {
  const classes = useStyles();

  return (
    <a href="https://www.facebook.com/grupahunter">
      <Box className={classes.root} />
    </a>
  );
};

export default FacebookIcon;
