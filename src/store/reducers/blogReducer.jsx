import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  GET_SINGLE_GALLERY,
  GET_FRONT_POSTS,
  CLEAR_TRIPS,
  CLEAR_SINGLE_TRIP,
  CLEAR_FRONT_TRIPS,
  TRIP_ERROR,
  SEARCH_TRIP,
  SET_LOADING,
  SET_CURRENT_PAGE,
  SET_TRIPS_NUMBER,
  SET_PAGES,
  SET_SIDEBAR_TRIPS,
  SET_VIEW,
  SET_IMAGES_NUMBER,
  GET_FRONT_ATTACHMENT,
  GET_ATTACHMENT,
} from '../actions/types';

const initialState = {
  trips: [],
  singleTrip: {},
  sidebarTrips: [],
  frontTrips: [],
  pages: 0,
  currentPage: 1,
  tripsNumber: 0,
  imagesNumber: 0,
  search: '',
  isLoading: false,
  error: null,
  view: 'agenda',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        trips: action.payload,
        isLoading: true,
      };

    case GET_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: { ...state.singleTrip, ...action.payload },
        isLoading: true,
      };

    case GET_SINGLE_GALLERY:
      return {
        ...state,
        singleTrip: { ...state.singleTrip, gallery: action.payload },
        isLoading: true,
      };

    case GET_FRONT_POSTS:
      return {
        ...state,
        frontTrips: action.payload,
        isLoading: true,
      };

    case GET_FRONT_ATTACHMENT:
      return {
        ...state,
        frontTrips: state.frontTrips.map((trip) => (trip.featured_media === action.payload.id
          ? { ...trip, image: action.payload.image }
          : { ...trip }
        )),
      };

    case GET_ATTACHMENT:
      return {
        ...state,
        trips: state.trips.map((trip) => (trip.featured_media === action.payload.id
          ? { ...trip, image: action.payload.image }
          : { ...trip }
        )),
      };

    case SEARCH_TRIP:
      return {
        ...state,
        search: action.payload,
      };

    case CLEAR_TRIPS:
      return {
        ...state,
        trips: [],
        isLoading: false,
      };

    case CLEAR_SINGLE_TRIP:
      return {
        ...state,
        singleTrip: {},
        isLoading: false,
      };

    case CLEAR_FRONT_TRIPS:
      return {
        ...state,
        frontTrips: [],
        isLoading: false,
      };

    case TRIP_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_TRIPS_NUMBER:
      return {
        ...state,
        tripsNumber: action.payload,
      };

    case SET_PAGES:
      return {
        ...state,
        pages: action.payload,
      };

    case SET_SIDEBAR_TRIPS:
      return {
        ...state,
        sidebarTrips: action.payload.slice(0, 4),
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case SET_VIEW:
      return {
        ...state,
        view: action.payload,
      };

    case SET_IMAGES_NUMBER:
      return {
        ...state,
        imagesNumber: action.payload,
      };

    default:
      return state;
  }
};
