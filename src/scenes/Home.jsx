import React from 'react';
import { Grid } from '@material-ui/core';
import Map from '../components/Home/Map';
import Movie from '../components/Home/Movie';
import Column from '../components/Home/Column';
import Boxes from '../components/Home/Boxes';
import Title from '../components/Title';
import Info from '../components/Home/Info/Info';
import FacebookIcon from '../components/Home/FacebookIcon';
import YouTubeIcon from '../components/Home/YouTubeIcon';
import InstagramIcon from '../components/Home/InstagramIcon';

const Home = () => (
  <>
    <FacebookIcon />
    <YouTubeIcon />
    <InstagramIcon />
    <Movie />
    <Info />
    <Boxes />
    <Title title="Linki" subTitle="" />
    <Column />
    <Grid>
      <Title title="Mapa" subTitle="Wszystkie nasze wyprawy" />
      <Map />
    </Grid>
  </>
);

export default Home;
