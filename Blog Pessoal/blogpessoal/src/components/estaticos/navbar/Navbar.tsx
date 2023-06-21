import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import {Box, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar className="nav" position="static" color="secondary">
                <Toolbar variant="dense">
                     <Box className='cursor'>
                        <Typography className='titulo-blog' variant="h3" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography className='nav-link' variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;