import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';

import '../../assets/fonts/fonts.css';

const TittleContainer = styled('div')({
  fontFamily: 'Black_Cherry',
  textAlign: 'center',
  lineHeight: '1',
  padding: '3vh 0vw',
  width: '100%',
  // backgroundColor: '#a6b71b', //#94a31a
  '& h1': {
    fontSize: '6rem',
  },
  '& h2': {
    fontSize: '3rem',
  },
});

export const Title = ({ title, subTtitle }) => {
  return (
    <>
      <Fade in={true} timeout={2000}>
        <TittleContainer>
          <h1>{title}</h1>
          <h2>{subTtitle}</h2>
        </TittleContainer>
      </Fade>
    </>
  );
};
