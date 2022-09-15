import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { Link,  NavLink } from 'react-router-dom';


import './style.scss'

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon sx={{ mr: 2 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className='nav__link'>POO</Link>
          </Typography>
             <NavLink to='/albums' className='mem'  >
                <Button className='nav__link'>Albums</Button>

             </NavLink>
             <NavLink to='/todos' className='mem'  >
                <Button className='nav__link'>Todo</Button>

             </NavLink>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
