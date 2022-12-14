import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'

const Layout = () => {
   return (
      <Box>
         <Container>
            <Navbar/>
            <Outlet />
         </Container>
      </Box>
   );
};

export default Layout;
