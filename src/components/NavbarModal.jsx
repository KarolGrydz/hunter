import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
  },
  menuItem: {
    display: 'flex',
    margin: theme.spacing(2),
    color: `${theme.palette.primary.contrastText}`,
    textDecoration: 'none',
    transition: 'color 100ms ease-in-out',
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
    },
  },
}));

const NavbarModal = ({ menuLinks }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} color="primary">
      {menuLinks.map(({ id, link, label }) => (
        <Link key={id} to={link} className={classes.menuItem}>
          {label}
        </Link>
      ))}
    </div>
  );
};

NavbarModal.propTypes = {
  menuLinks: propTypes.arrayOf.isRequired,
};

export default NavbarModal;
