import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import TripsContext from '../../context/trips/tripsContext';
import { FilterHdr, FolderSharp } from '@material-ui/icons';
import { Grid, List, ListItem } from '@material-ui/core';

const Title = styled('h2')({
  padding: '15px 0',
  borderBottom: 'solid #e4e7e8 1px',
  marginRight: '25px',
});

const CategoryName = styled('a')({
  color: '#515547',
  transitionDuration: '250ms',
  transitionTimingFunction: 'ease-in-out',
  '&:hover': {
    color: 'rgb(166, 183, 27)',
  },
});

const PostNumber = styled('span')({
  paddingLeft: '5px',
  color: 'rgb(166, 183, 27)',
});

const Icons = styled('span')({
  color: 'rgb(166, 183, 27)',
  paddingRight: '15px',
  '& svg': {
    fontSize: '2rem',
  },
});

const PostContainer = styled('div')({
  paddingLeft: '1.2rem',
  borderLeft: 'solid 3px #a6b71b',
  marginTop: '50px',
  '& h6': {
    textTransform: 'uppercase',
    fontSize: '1.17em',
    color: '#000',
  },
  '& h6:hover': {
    color: 'rgb(166, 183, 27)',
  },
  '& span': {
    color: 'rgb(166, 183, 27)',
    fontSize: '0.8em',
    textTransform: 'uppercase',
  },
});

export const BlogSidebar = ({ posts }) => {
  const tripsContext = useContext(TripsContext);
  const { clearSingleTrip, numberOfAllPosts } = tripsContext;

  return (
    <Grid item xs={3}>
      <Title>Kategorie</Title>
      <List>
        <ListItem>
          <Icons>
            <FilterHdr />
          </Icons>
          <CategoryName href='#'>Wyprawy</CategoryName>
          <PostNumber>({numberOfAllPosts})</PostNumber>
        </ListItem>
        <ListItem>
          <Icons>
            <FolderSharp />
          </Icons>
          <CategoryName href='#'>Aktulności</CategoryName>
          <PostNumber>(0)</PostNumber>
        </ListItem>
      </List>
      <Title>Ostatnie posty</Title>
      {posts.slice(0, 4).map((post) => (
        <PostContainer key={post.id}>
          <Link to={`/wyprawy/${post.id}`} onClick={() => clearSingleTrip()}>
            <h6>
              <div
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              ></div>
            </h6>
          </Link>
          <span>{post.date.slice(0, 10)}</span>
        </PostContainer>
      ))}
    </Grid>
  );
};

BlogSidebar.propTypes = {
  posts: propTypes.array.isRequired,
};
