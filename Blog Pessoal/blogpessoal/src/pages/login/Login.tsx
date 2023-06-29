import React, { useState, useEffect, ChangeEvent } from 'react';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6}>
                <Box className='formulario' paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography className='entrar' variant='h2' gutterBottom color='textPrimary' component='h2' align='center'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' className='text-decorator-none'>
                            <Button className='logar' type='submit' variant='contained' color='secondary'>Logar</Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='login-link'> <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography></Link>
                    </Box>
                </Box>
            </Grid>
            
        </Grid>
    );
}

export default Login