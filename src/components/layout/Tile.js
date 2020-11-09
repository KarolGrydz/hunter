import React from 'react';
import TileHOC from './TileHOC';
import Grid from '@material-ui/core/Grid';

import ForestImage from '../../assets/img/forest.jpg';

export const Tile = () => {
  return (
    <>
      <Grid container>
        <TileHOC img={ForestImage} />
        <TileHOC
          title={'Kim jesteśmy?'}
          text={
            'lorem lorem loremloremloremloremloremlorem loremloremloremloremloremlorem'
          }
        />
      </Grid>
    </>
  );
};
