import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, makeStyles, Typography, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';


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
    select: {
        width: '100%'
    }
}));

function SignUp() {

    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const [values, setvalues] = useState({
        email: "",
        name: "",
        number: "",
        password: "",
        role: ""
    });
    const [OTPerror, setOTPerror] = useState("")
    const [token, setToken] = useState()
    const [ID, setID] = useState(null)
    const history = useHistory();
    const [sendOTP, setsendOTP] = useState(false)
    const [error, setError] = React.useState('');
    const changeValues = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const validate = () => {
        if (!values.name || !values.email || !values.number || !values.password || !values.role) {
            setError('Please fill all the details.');
            return false;
        }
        if (values.name.length < 3 && !/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(values.name)) {
            setError('Please enter a valid name.');
            return false;
        }
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            setError('Please enter a valid emailId.');
            return false;
        }
        if (values.number.length !== 13) {
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
    const setOTP = (e) => {
        setToken(e.target.value)
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        // const value = { number: values.number }
        if (validate()) {
            await axios.post(`/signup`, values).then((res) => {
                if (res.data.message === "Email already exist") {
                    setError("Email or mobile number already exist")
                    history.push("/login");
                    setsendOTP(false)
                }
                if (res.data.message === "success") {
                    console.log(res)
                    localStorage.setItem("token", res.data.accessToken);
                    localStorage.setItem("data", res.data.data);
                    history.push("/");
                }
            }).catch((err) => {
                console.log(err)
            })
        //     setOpen(true)
            
        //     await axios.post(`/OTPgenerator`, value).then((response) => {
        //         setID(response.data.id)
        //         setsendOTP(true)
        //     }).catch((err) => {
        //        history.push('/')
        //     })
        // }
        }
    }
    const verifyOTP = async (e) => {
        e.preventDefault();
        const value = { id: ID, token: token }
        await axios.post(`/OTPverify`, value).then(async (resoponse) => {
            if (resoponse.data.message === "succes") {
                await axios.post(`/signup`, values).then((res) => {
                    if (res.data.message === "Email already exist") {
                        setError("Email or mobile number already exist")
                        history.push("/login");
                        setsendOTP(false)
                    }
                    if (res.data.message === "success") {
                        console.log(res)
                        localStorage.setItem("token", res.data.accessToken);
                        localStorage.setItem("data", res.data.data);
                        history.push("/");
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }
            else {
                setOTPerror('OTP is not correct')
                setsendOTP(true)
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>

            {/* {sendOTP ? <> */}
                {/* <Container component="main" maxWidth="xs"> */}
                    {/* {sendOTP ? <Typography>{OTPerror}</Typography> : null}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="OTP"
                        name="name"
                        type="text"
                        autoFocus
                        onChange={setOTP}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={verifyOTP}
                        className={classes.submit}>
                        Verify
                    </Button>
                    {sendOTP ? <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSignUp}
                        className={classes.submit}>
                        Resend OTP
                    </Button> : null}

                </Container>
            </> : */}
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Name"
                                name="name"
                                type="text"
                                autoFocus
                                value={values.name}
                                onChange={changeValues}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                value={values.email}
                                onChange={changeValues}
                                name="email"
                                type="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                value={values.number}
                                onChange={changeValues}
                                name="number"
                                label="Your Number"
                                type="text"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                value={values.password}
                                onChange={changeValues}
                                label="Password"
                                type="password"
                                id="password"
                            />
                            <FormControl variant="outlined" className={classes.select} >
                                <InputLabel id="demo-simple-select-outlined-label">You are</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="role"
                                    // value={values.role}
                                    // onChange={handleChange}
                                    label="You are*"
                                    onChange={changeValues}
                                >
                                    <MenuItem value={"Student"}>Student</MenuItem>
                                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSignUp}>
                                Sign Up
                            </Button>
                            <Grid container justifyContent='center'>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Already Account Log in"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
        </>
    );
}

export default SignUp;