import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography } from '@mui/material';

export default function Header({ signedIn, onSignOut }) {

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
