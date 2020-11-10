import React from 'react';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Facebook, YouTube } from '@material-ui/icons';

import CompExpert from '../../assets/img/CompExpert.png';
import MoroImage from '../../assets/img/moro.jpg';

const MyFooter = styled('footer')({
  width: '100%',
  // backgroundColor: '#515547',
  padding: '15px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const BackgroundDiv = styled('div')({
  backgroundImage: `url(${MoroImage})`,
  padding: '90px 0 40px 0',
});

const Logo = styled('img')({
  width: '120px',
});

const Comercial = styled(Paper)({
  margin: '15px',
  textAlign: 'center',
  '& p': {
    color: '#000',
  },
});

const Social = styled('a')({
  color: 'white',
  transitionDuration: '250ms',
  transitionTimingFunction: 'ease-in-out',
  '&:hover': {
    color: '#a6b71b',
  },
  '& svg': {
    fontSize: '3rem',
  },
});

const MakerLink = styled('a')({
  display: 'flex',
  // backgroundColor: '#515547',
  color: '#fff',
  justifyContent: 'center',
  padding: '20px 0',
  transitionDuration: '250ms',
  transitionTimingFunction: 'ease-in-out',
  '&:hover': {
    color: '#a6b71b',
    cursor: 'pointer',
  },
});

export const Footer = () => {
  return (
    <>
      <BackgroundDiv>
        <MyFooter>
          <Social href="https://www.facebook.com/grupahunter">
            <Facebook />
          </Social>
          <Comercial elevation={3}>
            <a href="https://www.compexpert.pl/">
              <p>Hosting zapewnia</p> <Logo src={CompExpert} alt="CompExpert" />
            </a>
          </Comercial>
          <Social href="https://www.youtube.com/user/grupahunter">
            <YouTube />
          </Social>
        </MyFooter>
        <MakerLink href="https://kg.glogow.pl/">
          Stworzone przez Karol Grydz 2020, Wszelkie prawa zastrzeżone
        </MakerLink>
      </BackgroundDiv>
    </>
  );
};
