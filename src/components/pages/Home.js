import React from 'react';

import { Title } from '../layout/Title';
import { Map } from '../layout/Map';
import { Tile } from '../layout/Tile';

export const Home = () => {
  return (
    <>
      <Title title={'Hunter'} subTtitle={'grupa eksploracyjno-historyczna'} />
      <Map />
      <Tile />
    </>
  );
};
