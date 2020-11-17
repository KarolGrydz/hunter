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
  UPDATE_PAGE,
  GET_SIDEBAR_POSTS,
} from '../types';

export const TripsState = (props) => {
  const initialState = {
    trips: [],
    singleTrip: [],
    pageNr: 1,
    sidebarTrips: [],
    numberOfAllPosts: 0,
    numberOfAllPages: 0,
  };

  const [state, dispatch] = useReducer(tripsReducer, initialState);

  const getTrips = async (gotNumbers = true, pageNr = 1, sidebar) => {
    console.log(gotNumbers, pageNr, Boolean(sidebar.length), sidebar);
    const res = await axios.get(
      'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy',
      { params: { page: pageNr } }
    );

    dispatch({
      type: GET_TRIPS,
      payload: res.data,
    });

    updatePaginationPage(pageNr);

    if (!sidebar.length) getSidebarTrips(res.data);

    if (!gotNumbers) {
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

  const updatePaginationPage = (res) =>
    dispatch({ type: UPDATE_PAGE, payload: res });

  const clearSingleTrip = () => dispatch({ type: CLEAR_SINGLE_TRIP });

  const clearTrips = () => dispatch({ type: CLEAR_ALL_TRIPS });

  const addNumberOfAllPosts = (res) =>
    dispatch({ type: GET_ALL_POST_NUBER, payload: res });

  const addNumberOfAllPages = (res) =>
    dispatch({ type: GET_ALL_PAGES_NUMBER, payload: res });

  const getSidebarTrips = (res) =>
    dispatch({ type: GET_SIDEBAR_POSTS, payload: res });

  return (
    <TripsContext.Provider
      value={{
        trips: state.trips,
        singleTrip: state.singleTrip,
        moreTrips: state.moreTrips,
        pageNr: state.pageNr,
        numberOfAllPosts: state.numberOfAllPosts,
        numberOfAllPages: state.numberOfAllPages,
        sidebarTrips: state.sidebarTrips,
        getTrips,
        getSingleTrip,
        clearTrips,
        clearSingleTrip,
        getSidebarTrips,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
