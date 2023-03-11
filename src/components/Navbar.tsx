import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { SelectProps } from '@mui/material';

const Navbar: React.FC<SelectProps> = ({}) => {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h6">Couch Room</Typography>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navbar;
