import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { FilterHdr, FolderSharp } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
  return (
    <Grid item xs={3}>
      <Title>Kategorie</Title>
      <List>
        <ListItem>
          <Icons>
            <FilterHdr />
          </Icons>
          <CategoryName href='#'>Wyprawy</CategoryName>
          <PostNumber>({posts.length})</PostNumber>
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
      {posts.slice(0, 2).map((post) => (
        <PostContainer key={post.id}>
          <Link to='#'>
            <h6>{post.title.rendered}</h6>
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
