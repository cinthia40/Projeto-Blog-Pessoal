import React from 'react'
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Entrar</Typography>
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' className='text-decorator-none'>
                            <Link to='/home'>
                            <Button type='submit' variant='contained' color='secondary'>Logar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login