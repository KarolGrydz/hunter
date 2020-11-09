import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#515547',
  },
  image: {
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  return <div className={classes.root}>{text}</div>;
};

TileHOC.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(TileHOC);
