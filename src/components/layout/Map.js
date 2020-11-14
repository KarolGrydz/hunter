import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import SampleMap from '../../assets/img/mapa.jpg';

const MyMap = styled('img')({
  width: 'auto',
  height: '65vh',
  display: 'flex',
  margin: 'auto',
});

const MyContainer = styled(Container)({
  padding: '5vh 0 10vh 0',
});

export const Map = () => {
  return (
    <MyContainer>
      <Link to='/wyprawy/'>
        <MyMap src={SampleMap} alt='Map' />
      </Link>
    </MyContainer>
  );
};
