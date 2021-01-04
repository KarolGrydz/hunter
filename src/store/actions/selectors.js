import { createSelector } from 'reselect';
import returnTrip from '../mappers/tripMapper';

const getBlog = ({ blog }) => blog;

export const getTrips = createSelector(getBlog, (trips) => trips.map((trip) => returnTrip(trip)));

export const selectSingleTrip = createSelector(getBlog, (trip) => returnTrip(trip));

export const selectSidebarTrips = createSelector(getBlog, (trips) => trips
  .map((trip) => returnTrip(trip)));

export const selectAllPagesNumber = createSelector(getBlog, (pages) => Number(pages));

export const selectCurrentPage = createSelector(getBlog, (currentPage) => Number(currentPage));

export const selectAllPostNumber = createSelector(getBlog, (tripsNumber) => Number(tripsNumber));

export const selectSearch = createSelector(getBlog, (search) => toString(search));

export const selectLoading = createSelector(getBlog, (isLoading) => isLoading);

export const selectError = createSelector(getBlog, (err) => err);
