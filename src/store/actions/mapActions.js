import { GET_MAP_TRIPS } from './types';

export const getPosts = (data) => ({
  type: GET_MAP_TRIPS,
  payload: data,
});
