import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Facebook, YouTube } from '@material-ui/icons';

import CompExpert from '../assets/img/CompExpert.png';
import MoroImage from '../assets/img/moro.jpg';

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundImage: `url(${MoroImage})`,
    position: 'absolute',
    bottom: 0,
  },
  img: {
    width: theme.spacing(10),
  },
  a: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Grid container justify="space-evenly" className={classes.div}>
        <Box container alignItems="center" display="flex">
          <a href="https://www.facebook.com/grupahunter">
            <Facebook />
          </a>
          <a href="https://www.compexpert.pl/" className={classes.a}>
            <p>Hosting zapewnia</p>
            <img src={CompExpert} alt="CompExpert" className={classes.img} />
          </a>
          <a href="https://www.youtube.com/user/grupahunter">
            <YouTube />
          </a>
        </Box>
      </Grid>
    </footer>
  );
};

export default Footer;
