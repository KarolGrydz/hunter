import React, { useReducer } from 'react';
import axios from 'axios';
import TripsContext from './tripsContext';
import { tripsReducer } from './tripsReducer';
import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_SINGLE_TRIP,
  GET_ALL_PAGES_NUMBER,
  GET_ALL_POST_NUBER,
  CLEAR_ALL_TRIPS,
} from '../types';

export const TripsState = (props) => {
  const initialState = {
    trips: [],
    singleTrip: [],
    numberOfAllPosts: 0,
    numberOfAllPages: 0,
  };

  const [state, dispatch] = useReducer(tripsReducer, initialState);

  const getTrips = async (gotNumber, pageNr = 1) => {
    const res = await axios.get(
      'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy',
      { params: { page: pageNr } }
    );

    dispatch({
      type: GET_TRIPS,
      payload: res.data,
    });

    if (!gotNumber) {
      addNumberOfAllPosts(res.headers['x-wp-total']);
      addNumberOfAllPages(res.headers['x-wp-totalpages']);
    }
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

  const clearTrips = () => dispatch({ type: CLEAR_ALL_TRIPS });

  const addNumberOfAllPosts = (res) =>
    dispatch({ type: GET_ALL_POST_NUBER, payload: res });

  const addNumberOfAllPages = (res) =>
    dispatch({ type: GET_ALL_PAGES_NUMBER, payload: res });

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        singleTrip: state.singleTrip,
        moreTrips: state.moreTrips,
        numberOfAllPosts: state.numberOfAllPosts,
        numberOfAllPages: state.numberOfAllPages,
        getTrips,
        getSingleTrip,
        clearTrips,
        clearSingleTrip,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
