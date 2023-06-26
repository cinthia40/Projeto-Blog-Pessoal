import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import {Box, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        alert('Usuário deslogado!')
        navigate('/login')
    }
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
                        <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography className='nav-link' variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography className='nav-link' variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;