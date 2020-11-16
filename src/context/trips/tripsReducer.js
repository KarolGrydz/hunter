import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_SINGLE_TRIP,
  CLEAR_ALL_TRIPS,
  GET_ALL_PAGES_NUMBER,
  GET_ALL_POST_NUBER,
} from '../types';

export const tripsReducer = (state, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
      };

    case GET_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: action.payload,
      };

    case GET_ALL_PAGES_NUMBER:
      return {
        ...state,
        numberOfAllPages: action.payload,
      };

    case GET_ALL_POST_NUBER:
      return {
        ...state,
        numberOfAllPosts: action.payload,
      };

    case CLEAR_ALL_TRIPS:
      return {
        ...state,
        trips: [],
      };

    case CLEAR_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: [],
      };

    default:
      return state;
  }
};
