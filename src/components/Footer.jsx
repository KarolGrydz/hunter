import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MoroImage from '../assets/img/moro.jpg';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${MoroImage})`,
    width: '100%',
    bottom: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  compExpert: {
    margin: 'auto',
    width: '100%',
    opacity: '.85',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: 3,
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={4}>
          <a href="https://kg.glogow.pl/" target="blank" className={classes.compExpert}>
            Karol Grydz
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
