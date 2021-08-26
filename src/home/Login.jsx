import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// const baseURL = 'http://localhost:8000'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    containr: {
        margin: '2rem 0'
    },
    error: {
        color: 'red'
    }
}));

function LogIn() {
    let history = useHistory()
    const classes = useStyles();
    const [values, setValue] = useState({
        Number: '',
        password: ''
    })
    const [error, setError] = useState('')
    const validate = () => {
        if (!values.number || !values.password) {
            setError('Please fill all the details.');
            return false;
        }
        if (values.number.length !== 10) {
            setError('Mobile number should have 10 digits.');
            return false;
        }
        if (isNaN(values.number)) {
            setError('Mobile number should have numbers only.');
            return false;
        }
        if (values.password.length < 8) {
            setError('Password should have atleast 8 characters.');
            return false;
        }
        return true;
    }
    const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault()
     
        if (validate()) {
            
            axios.post(`/login`, values).then((res) => {
                if (res.data.message === "success") {
                    console.log(res)
                    localStorage.setItem("token", res.data.accessToken);
                    localStorage.setItem("data", res.data.data);
                    history.push("/");
                }
                else{
                    history.push('/login')
                }
            }).catch((err) => {
                console.log(err)
            })
        }

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" className={classes.error}>
                    {error}
                </Typography>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="number"
                        label="Mobile number"
                        name="number"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/sign-Up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}


export default LogIn