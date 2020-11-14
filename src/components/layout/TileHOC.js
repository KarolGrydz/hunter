import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#f1f1f1',
  },

  text: {
    padding: '80px 50px 65px 50px',
    '& h1': {
      textAlign: 'center',
      marginBottom: '25px',
    },
    '& p': {
      padding: '0 50px',
    },
  },

  image: {
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
};

//test dodanie obrazka jakiegoś

const TileHOC = ({ classes, text, img, title }) => {
  return (
    <Grid item xs={6} className={classes.root}>
      {img ? (
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ) : (
        <Container className={classes.text}>
          <h1>{title}</h1>
          <p>{text}</p>
        </Container>
      )}
    </Grid>
  );
};

TileHOC.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(TileHOC);
