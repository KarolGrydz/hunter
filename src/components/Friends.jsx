import React from 'react';
import * as R from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  Fade,
} from '@material-ui/core';
import { friends } from '../constants/apiUrls';
import Preloader from './Blog/Preloader';
import usePages from '../hooks/usePages';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    minHeight: '80vh',
  },
  title: {
    padding: theme.spacing(3, 0),
    borderBottom: 'solid #e4e7e8 1px',
    color: '#000',
    transition: 'color 200ms ease-in-out',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'left',
  },
}));

const Friends = () => {
  const classes = useStyles();
  const data = usePages(friends);

  if (R.isEmpty(data)) return <Preloader />;

  return (
    <Container className={classes.root} maxWidth="md">
      <Fade in timeout={2500}>
        <Grid container justify="center" direction="column">
          <Typography variant="h3" className={classes.title}>
            {data.title.rendered}
          </Typography>
          <Typography className={classes.text}>
            <span dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
          </Typography>
        </Grid>
      </Fade>
    </Container>
  );
};

export default Friends;
