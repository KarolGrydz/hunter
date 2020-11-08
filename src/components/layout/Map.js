import React from 'react';
import SampleMap from '../../assets/img/mapa.jpg';
import { styled } from '@material-ui/core/styles';

const MyMap = styled('img')({
  width: 'auto',
  height: '65vh',
  display: 'flex',
  margin: 'auto',
});

export const Map = () => {
  return (
    <>
      <MyMap src={SampleMap} alt='Map' />
    </>
  );
};
