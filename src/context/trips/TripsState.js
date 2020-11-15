import React, { useReducer } from 'react';
import axios from 'axios';
import TripsContext from './tripsContext';
import { tripsReducer } from './tripsReducer';
import { GET_TRIPS, GET_SINGLE_TRIP, CLEAR_SINGLE_TRIP } from '../types';

export const TripsState = (props) => {
  const initialState = {
    trips: [],
    singleTrip: [],
  };

  const [state, dispatch] = useReducer(tripsReducer, initialState);

  const getTrips = async () => {
    const res = await axios.get(
      'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy'
    );

    dispatch({
      type: GET_TRIPS,
      payload: res.data,
    });
  };

  const getSingleTrip = async (id) => {
    const res = await axios.get(
      `https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/${id}`
    );

    dispatch({
      type: GET_SINGLE_TRIP,
      payload: res.data,
    });
  };

  const clearSingleTrip = () => dispatch({ type: CLEAR_SINGLE_TRIP });

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        singleTrip: state.singleTrip,
        getTrips,
        getSingleTrip,
        clearSingleTrip,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
