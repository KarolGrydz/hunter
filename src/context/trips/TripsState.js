import React, { useReducer } from 'react';
import axios from 'axios';
import TripsContext from './tripsContext';
import { tripsReducer } from './tripsReducer';
import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_SINGLE_TRIP,
  GET_MORE_TRIPS,
} from '../types';

export const TripsState = (props) => {
  const initialState = {
    trips: [],
    singleTrip: [],
    moreTrips: [],
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

  const getMoreTrips = async () => {
    const res = await axios.get(
      'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy',
      {
        params: {
          per_page: 20,
        },
      }
    );


    console.log(res.headers.['x-wp-total']);
    console.log(res.headers.['x-wp-totalpages']);
    console.log(res.headers);
    dispatch({
      type: GET_MORE_TRIPS,
      payload: res.data,
    });
  };

  const clearSingleTrip = () => dispatch({ type: CLEAR_SINGLE_TRIP });

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        singleTrip: state.singleTrip,
        moreTrips: state.moreTrips,
        getTrips,
        getSingleTrip,
        clearSingleTrip,
        getMoreTrips,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
