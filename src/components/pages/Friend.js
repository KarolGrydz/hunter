import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Title } from '../layout/Title';

import Background from '../../assets/img/friends.jpg';

const Container = styled('div')({
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  padding: '30vh 15vw',
  fontSize: '1.2em',
  position: 'relative',
  zIndex: '-1',
});

const Overlay = styled('div')({
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  backgroundColor: '#000000',
  opacity: '0.66',
  zIndex: '-1',
});

export const Friend = () => {
  return (
    <Container>
      <Overlay />
      <Title title={'Przyjaciele'} />
    </Container>
  );
};
