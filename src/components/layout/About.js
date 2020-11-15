import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Title } from './Title';
import { Fade } from '@material-ui/core';

import Background from '../../assets/img/bg_footer.jpg';

const Container = styled('div')({
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  padding: '10vh 15vw',
  fontSize: '1.2em',
  '& p': {
    padding: '5vh 0',
  },
  '& h3': {
    fontWeight: 'bold',
    padding: '15px 0',
  },
});

export const About = () => {
  return (
    <Container>
      <Title title={'Kim jesteśmy?'} />
      <Fade in={true} timeout={2500}>
        <div>
          <h3>
            Kilku zapaleńców z Polkowic bywa w niedostępnych miejscach. Ostatnio
            odkrywali tajemnice kopalni w Walimiu. Chwycili za łopaty i szukali
            tajemnic. (gazeta Lubuska).
          </h3>
          <p>
            W grupie jest około dziesięciu osób. Zajmujemy się na co dzień
            różnorodnymi rzeczami. Co nas łączy? Uwielbiamy jeździć do miejsc
            trudno dostępnych, które mają bardzo ciekawa i tajemniczą historię.
            Przemierzyliśmy już m.in. podziemne korytarze Międzyrzeckiego Rejonu
            Umocnionego, poradzieckie bunkry w Przemkowie oraz w Wilkocinie.
            Odkrywali tajemnice zamku Czocha i twierdzy w Srebrnej Górze.
          </p>

          <h3>SKŁAD NASZEJ GRUPY:</h3>
          <ul>
            <li>Paweł Brudny</li>
            <li>Robert Florek</li>
            <li>Michał Gontaszewski</li>
            <li>Grzegorz Karkos</li>
            <li>Krzyś Mościński</li>
            <li>Wojtek Piekarz</li>
            <li>Darek Ryglicki</li>
            <li>Robert Strug</li>
            <li>Sławomir Tarnowski</li>
            <li>Paweł Wasilewski</li>
            <li>Piotr Kurmański</li>
            <li>Karol Kubasik</li>
          </ul>
          <h3>CZŁONKOWIE HONOROWI:</h3>
          <ul>
            <li>Andrzej Boczek</li>
            <li>Menachem Kaizer</li>
          </ul>
          <h3>WPÓŁPRACUJĄ Z NAMI:</h3>
          <ul>
            <li>Andrzej Kaczanowski</li>
            <li>Daniel Błażejewski</li>
            <li>Andrzej Siejek</li>
          </ul>
        </div>
      </Fade>
    </Container>
  );
};
