import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_SINGLE_TRIP,
  GET_MORE_TRIPS,
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

    case CLEAR_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: [],
      };

    case GET_MORE_TRIPS:
      return {
        ...state,
        moreTrips: action.payload,
      };

    default:
      return state;
  }
};
