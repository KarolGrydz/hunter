import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  date: {
    color: `${theme.palette.secondary.main}`,
    textTransform: 'uppercase',
    padding: theme.spacing(3, 0),
  },
}));

const BlogDate = ({ date, text }) => {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.date}>
        {text}
        {date.slice(0, 10)}
      </span>
    </div>
  );
};

BlogDate.propTypes = {
  date: propTypes.string.isRequired,
  text: propTypes.string,
};

BlogDate.defaultProps = {
  text: '',
};

export default BlogDate;
