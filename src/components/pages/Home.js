import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import TripsContext from '../../context/trips/tripsContext';

import { Preloader } from '../layout/Preloader';

export const Home = () => {
  const tripsContext = useContext(TripsContext);
  const { getTrips, trips } = tripsContext;

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <>
      {!trips.length ? (
        <Preloader />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: trips[0].content.rendered }}
        ></div>
      )}
    </>
  );
};
