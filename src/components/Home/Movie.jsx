import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import intro from '../../assets/video/intro3.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: 'no-repeat center center fixed',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '40vh',
    },
  },

  movie: {
    position: 'absolute',
    width: '100%',
  },

  bgColor: {
    backgroundColor: '#000',
  },
}));

const Movie = () => {
  const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <Box className={classes.root}>
        <video
          className={classes.movie}
          autoPlay="true"
          muted="true"
          loop="true"
          src={intro}
        />
      </Box>
    </div>
  );
};

export default Movie;
