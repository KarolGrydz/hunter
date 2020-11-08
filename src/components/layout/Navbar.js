import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HunterLogo from '../../assets/img/logo.jpg';

const Navigation = styled('nav')({
  flexGrow: 1,
  background: '#515547',
  fontWeight: 600,
});

const MyLink = styled(NavLink)({
  padding: '8px',
  textAlign: 'center',
  color: '#fff',
  transitionDuration: '250ms',
  transitionTimingFunction: 'ease-in-out',
  '&:hover': {
    color: '#a6b71b', // #8d9b1a
    borderBottom: '1px solid #8d9b1a',
  },
});

const List = styled(Grid)({
  paddingRight: '5vw',
});

const Logo = styled('img')({
  height: '128px',
  padding: '5px',
});

export const Navbar = () => {
  return (
    <Navigation>
      <Grid container>
        <Grid xs={2}>
          <Logo src={HunterLogo} alt='Logo' />
        </Grid>
        <List xs={10} container justify='flex-end' alignItems='center'>
          <Grid item>
            <MyLink activeStyle={{ color: '#a6b71b' }} exact to='/'>
              Hunter
            </MyLink>
          </Grid>
          <Grid item>
            <MyLink activeStyle={{ color: '#a6b71b' }} to='/kim-jestesmy/'>
              Kim jesteśmy?
            </MyLink>
          </Grid>
          <Grid item>
            <MyLink activeStyle={{ color: '#a6b71b' }} to='/wyprawy/'>
              Wyprawy
            </MyLink>
          </Grid>
          <Grid item>
            <MyLink activeStyle={{ color: '#a6b71b' }} to='/przyjaciele/'>
              Przyjaciele
            </MyLink>
          </Grid>
          <Grid item>
            <MyLink activeStyle={{ color: '#a6b71b' }} to='/kontakt/'>
              Kontakt
            </MyLink>
          </Grid>
        </List>
      </Grid>
    </Navigation>
  );
};
