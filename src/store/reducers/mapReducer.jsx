import { GET_MAP_TRIPS } from '../actions/types';

const initialState = {
  mapTrips: [],
  mapDate: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_TRIPS:
      return {
        ...state,
        mapTrips: action.payload,
      };

    default:
      return state;
  }
};
