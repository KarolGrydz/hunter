import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Logo from '../../assets/img/logo.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#515547',
    fontWeight: 600,
  },
  link: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
  },
  link_list: {
    paddingRight: '5vw',
  },
  logo: {
    height: '128px',
    padding: '5px',
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={2}>
          <img src={Logo} alt="Logo" className={classes.logo} />
        </Grid>
        <Grid
          xs={10}
          container
          justify="flex-end"
          alignItems="center"
          className={classes.link_list}
        >
          <Grid item className={classes.link}>
            Hunter
          </Grid>
          <Grid item className={classes.link}>
            Kim jesteśmy?
          </Grid>
          <Grid item className={classes.link}>
            Wyprawy
          </Grid>
          <Grid item className={classes.link}>
            Przyjaciele
          </Grid>
          <Grid item className={classes.link}>
            Kontakt
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
