import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ForestImage from '../../assets/img/forest.jpg';

const Title = styled('h2')({
  padding: '15px 0',
  borderBottom: 'solid #e4e7e8 1px',
  marginRight: '25px',
  color: '#000',
  '&:hover': {
    color: 'rgb(166, 183, 27)',
  },
});

const PostContainer = styled('div')({
  padding: '0 25px',
  height: '50vh',
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
  '& div': {
    backgroundColor: '#cecece',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '80%',
  },
});

export const BlogContent = ({ posts }) => {
  console.log(posts);
  return (
    <Grid item xs={9}>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <Link to='#'>
            <Title>{post.title.rendered}</Title>
          </Link>
          <span>{post.date.slice(0, 10)}</span>
          <a href=''></a>
          <div style={{ backgroundImage: `url(${ForestImage})` }}></div>
        </PostContainer>
      ))}
    </Grid>
  );
};

BlogContent.propTypes = {
  posts: propTypes.array.isRequired,
};
