import React from 'react';
import { useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCameraRetro,
  faGlobeAfrica,
} from '@fortawesome/free-solid-svg-icons';
import {
  getAllPostNumber,
  getImagesNumber,
} from '../../store/actions/selectors';

import Fire from '../../assets/img/farCastle.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(15, 0),
    background: `url(${Fire}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0),
    },
  },

  card: {
    minHeight: theme.spacing(35),
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },

  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
    fontWeight: 'bold',
  },

  icon: {
    fontSize: theme.spacing(15),
  },
}));

const Boxes = () => {
  const classes = useStyles();
  const allPostNumber = useSelector(getAllPostNumber);
  const allImagesNumber = useSelector(getImagesNumber);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={5}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Typography variant="h5" align="center" gutterBottom="true">
                      <CountUp
                        end={allPostNumber}
                        start={isVisible ? 0 : allPostNumber}
                        duration={4}
                      />
                      {' '}
                      wypraw udokumentowanych na naszej stronie
                    </Typography>
                  )}
                </VisibilitySensor>
                <FontAwesomeIcon
                  icon={faGlobeAfrica}
                  className={classes.icon}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={2} />
          <Grid xs={12} sm={12} md={5}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <Typography variant="h5" align="center" gutterBottom="true">
                      <CountUp
                        end={allImagesNumber}
                        start={isVisible ? 0 : allImagesNumber}
                        duration={4}
                      />
                      {' '}
                      zdjęć w galeriach
                    </Typography>
                  )}
                </VisibilitySensor>
                <FontAwesomeIcon
                  icon={faCameraRetro}
                  className={classes.icon}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Boxes;
