import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import TripsContext from '../../context/trips/tripsContext';

import { Preloader } from '../layout/Preloader';
import { Title } from '../layout/Title';
import { Map } from '../layout/Map';

export const Home = () => {
  const tripsContext = useContext(TripsContext);
  const { getTrips, trips } = tripsContext;

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <>
      <Title />
      <Map />
    </>
  );
};
