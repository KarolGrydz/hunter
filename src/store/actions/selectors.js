import { createSelector } from 'reselect';
import returnTrip from '../../mappers/tripMapper';

const getBlog = ({ blog }) => blog;

export const getTrips = createSelector(getBlog, ({ trips }) => trips
  .map((trip) => returnTrip(trip)));

export const getSingleTrip = createSelector(getBlog, ({ trip }) => returnTrip(trip));

export const getSidebarTrips = createSelector(getBlog, ({ trips }) => trips
  .map((trip) => returnTrip(trip)));

export const getAllPagesNumber = createSelector(getBlog, ({ pages }) => Number(pages));

export const getCurrentPage = createSelector(getBlog, ({ currentPage }) => Number(currentPage));

export const getAllPostNumber = createSelector(getBlog, ({ tripsNumber }) => Number(tripsNumber));

export const getSearch = createSelector(getBlog, ({ search }) => toString(search));

export const getLoading = createSelector(getBlog, ({ isLoading }) => isLoading);

export const getError = createSelector(getBlog, ({ err }) => err);
