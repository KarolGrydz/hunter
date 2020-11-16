import React, { useEffect, useContext } from 'react';
import { styled } from '@material-ui/core/styles';
import TripsContext from '../../context/trips/tripsContext';
import { Container, Grid } from '@material-ui/core';

import { Preloader } from '../layout/Preloader';
import { BlogContent } from '../layout/BlogContent';
import { BlogSidebar } from '../layout/BlogSidebar';
import { BlogPagination } from '../layout/BlogPagination';

const BlogContainer = styled(Container)({
  padding: '10vh 0',
});

export const Blog = () => {
  const tripsContext = useContext(TripsContext);
  const { getTrips, trips, numberOfAllPosts } = tripsContext;

  useEffect(() => {
    getTrips(numberOfAllPosts);
    // eslint-disable-next-line
  }, []);

  if (!trips.length) return <Preloader />;

  return (
    <BlogContainer>
      <Grid container>
        <BlogContent posts={trips} />
        <BlogSidebar posts={trips} />
        <BlogPagination />
      </Grid>
    </BlogContainer>
  );
};

// dangerouslySetInnerHTML={{ __html: trip.title.rendered }}
