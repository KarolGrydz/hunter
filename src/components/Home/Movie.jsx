import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Container,
  Grid,
} from '@material-ui/core';
import intro from '../../assets/video/intro4.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    display: 'flex',
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

  text: {
    color: 'gold',
    zIndex: '100',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(100,100,100,0.5)',
    textShadow: '0em 0.1em 0.1em #000000',
    height: theme.spacing(40),
    width: theme.spacing(40),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  urlToMovie: {
    position: 'absolute',
    bottom: '1vh',
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
}));

const Movie = () => {
  const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <Box className={classes.root}>
        <Container>
          <Grid container>
            <Typography variant="h6" className={classes.text}>
              <i>
                Za dwadzieścia lat bardziej będziesz żałował tego, czego nie zrobiłeś, niż tego, co
                zrobiłeś. Więc odwiąż liny, opuść bezpieczną przystań. Złap w żagle pomyślne wiatry.
                Podróżuj, śnij, odkrywaj.”
              </i>
              <br />
              – Mark Twain
            </Typography>
          </Grid>
        </Container>
        <video className={classes.movie} autoPlay="true" muted="true" loop="true" src={intro} />
        <a className={classes.urlToMovie} href="https://www.youtube.com/watch?v=38rf6oz7VCM&t=2s">Całość filmu można zobaczyć tutaj</a>
      </Box>
    </div>
  );
};

export default Movie;
