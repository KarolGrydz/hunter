const theme = {
  palette: {
    primary: {
      light: '#7d8172',
      main: '#515547',
      dark: '#292c20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#dae954',
      main: '#a6b71b',
      dark: '#738700',
      contrastText: '#000',
    },
  },
};

theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
      },
      body: {
        lineHeight: '1.6',
      },
      a: {
        textDecoration: 'none',
        color: `${theme.palette.primary.contrastText}`,
        transitionDuration: '250ms',
        transitionTimingFunction: 'ease-in-out',
        '&:hover': {
          color: `${theme.palette.secondary.main}`,
        },
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
  },
};

export default theme;
