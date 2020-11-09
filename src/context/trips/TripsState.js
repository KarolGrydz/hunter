import React, { useReducer } from 'react';
import axios from 'axios';
import TripsContext from './tripsContext';
import TripsReducer from './tripsReducer';
import { GET_TRIPS } from '../types';

export const TripsState = (props) => {
  const initialState = {
    trips: [],
  };

  const [state, dispatch] = useReducer(TripsReducer, initialState);

  const getTrips = async () => {
    const res = await axios.get(
      'http://hunter.polkowice.pl/wp-json/wp/v2/wyprawy'
    );

    dispatch({
      type: GET_TRIPS,
      payload: res.data,
    });
  };

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        getTrips,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
