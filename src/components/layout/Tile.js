import React from 'react';
import TileHOC from './TileHOC';
import Grid from '@material-ui/core/Grid';

import ForestImage from '../../assets/img/forest.jpg';
import LeafImage from '../../assets/img/leaf.jpg';
import FireImage from '../../assets/img/fire.jpg';

export const Tile = () => {
  return (
    <>
      <Grid container>
        <TileHOC img={ForestImage} />
        <TileHOC
          title={'Kim jesteśmy?'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Nam malesuada tempus risus, ut ullamcorper risus elementum eu.'
          }
        />
        <TileHOC
          title={'Co robimy?'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Nam malesuada tempus risus, ut ullamcorper risus elementum eu.'
          }
        />
        <TileHOC img={LeafImage} />
        <TileHOC img={FireImage} />
        <TileHOC
          title={'Plany na przyszłość'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet eros leo, eget consequat orci viverra nec. Suspendisse pellentesque sem metus, et mollis purus auctor in. Suspendisse congue quam eros, vel cursus ante semper id. Nam malesuada tempus risus, ut ullamcorper risus elementum eu.'
          }
        />
      </Grid>
    </>
  );
};
