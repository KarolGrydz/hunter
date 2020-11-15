import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Title } from '../layout/Title';

import Background from '../../assets/img/contact.jpg';

const ContactContainer = styled('div')({
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  padding: '20vh 15vw',
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

export const Contact = () => {
  return (
    <ContactContainer>
      <Overlay />
      <Title title={'Kontakt'} />
      <Title title={'hunter.polkowice@wp.pl'} />
    </ContactContainer>
  );
};
