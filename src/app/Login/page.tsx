'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" className={'mb-3'} href="">
        Grupo 3
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
);
}

const defaultTheme = createTheme();

export default function SignIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xs"  className="bg-white rounded" >
    <CssBaseline />
    <Box
        sx={{
        marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
    }}
>
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5" className={"text-black"}>
        Iniciar Sesion
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextField

        color="secondary"
    margin="normal"
    variant={"filled"}
    required
    fullWidth
    id="email"
    label="Correo Electronico"
    name="email"
    autoComplete="email"
    autoFocus
    />
    <TextField
        margin="normal"
    variant={"filled"}
    required
    fullWidth
    name="password"
    label="Constraseña"
    type="password"
    id="password"
    autoComplete="current-password"
    />
    <FormControlLabel className={"text-black"}
    control={<Checkbox value="remember" color="primary" />}
    label="Recuerdame"
    />
    <Button
        className={" bg-blue-600 hover:bg-blue-800"}
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
>
    Iniciar Sesion
    </Button>
    <Grid container>
    <Grid item xs>
    <Link href="#" variant="body2">
        Olvidaste tu contraseña?
        </Link>
        </Grid>
        <Grid item>
        <Link href="#" variant="body2">
        {"No tienes cuenta? Unete!"}
        </Link>
        </Grid>
        </Grid>
        </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
);
}