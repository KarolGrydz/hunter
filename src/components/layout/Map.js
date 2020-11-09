import React from 'react';
import SampleMap from '../../assets/img/mapa.jpg';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const MyMap = styled('img')({
  width: 'auto',
  height: '65vh',
  display: 'flex',
  margin: 'auto',
});

const MyContainer = styled(Container)({
  padding: '10vh 0',
});

export const Map = () => {
  return (
    <MyContainer>
      <MyMap src={SampleMap} alt="Map" />
    </MyContainer>
  );
};
