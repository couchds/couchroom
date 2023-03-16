import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { SelectProps } from '@mui/material';
import { Link } from '@mui/material';


interface PageInfo {
  href: string,
  title: string
};

const pages: Array<PageInfo> = [
  {
    href: 'apps',
    title: 'Apps'
  },
  {
    href: 'devlog',
    title: 'DevLog'
  }
];

const linkSx = {
  color: 'white',
  marginLeft: '20px'
}

const Navbar: React.FC<SelectProps> = ({}) => {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Couch Room</Typography>
          <div>
            {
              pages.map((page) => (
                <Link key={page.href} sx={linkSx} href={page.href}>{ page.title }</Link>
              ))
            }
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
