import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import yt from '../../assets/img/yt3.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: '9999',
    color: '#fff',
    right: '0',
    top: '40vh',
    background: `url(${yt})`,
    height: '92px',
    width: '35px',
    [theme.breakpoints.down('sm')]: {
      top: '30vh',
    },
    [theme.breakpoints.down('xs')]: {
      top: '20vh',
    },
  },
}));

const YouTubeIcon = () => {
  const classes = useStyles();

  return (
    <a href="https://www.youtube.com/user/grupahunter/">
      <Box className={classes.root} />
    </a>
  );
};

export default YouTubeIcon;
