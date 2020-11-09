import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#515547',
    padding: '70px 50px 45px 50px',
    '& h1': {
      textAlign: 'center',
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
  if (img)
    return (
      <Grid item xs={6}>
        <img className={classes.image} src={img} alt='full img' />
      </Grid>
    );
  return (
    <Grid item xs={6} className={classes.root}>
      <Container>
        <h1>{title}</h1>
        <p>{text}</p>
      </Container>
    </Grid>
  );
};

TileHOC.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(TileHOC);
