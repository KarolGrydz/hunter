import React, { useContext } from 'react';
import TripsContext from '../../context/trips/tripsContext';
import { styled } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const BlogPagination = () => {
  const tripsContext = useContext(TripsContext);
  const {
    numberOfAllPages,
    getTrips,
    clearTrips,
    pageNr,
    sidebarTrips,
  } = tripsContext;

  console.log(sidebarTrips.length);

  return (
    <Container>
      <Pagination
        count={Number(numberOfAllPages)}
        variant="outlined"
        shape="rounded"
        onChange={(event, page) =>
          getTrips(numberOfAllPages, page, sidebarTrips)
        }
        onClick={() => clearTrips()}
        page={pageNr}
      />
    </Container>
  );
};

//Bug to repair
