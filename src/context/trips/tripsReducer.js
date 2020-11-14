import { GET_TRIPS } from '../types';

export const tripsReducer = (state, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
      };

    default:
      return state;
  }
};
