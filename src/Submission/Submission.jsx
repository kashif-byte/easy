import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

const UseStyles = makeStyles((theme) => ({
    container: {
        height: '100vh' 
    }
}))

const Submission = () => {
    const classes = UseStyles()
    return (
        <>
            <Grid container alignItems="Center" justifyContent="center" className={classes.container}>
                <Grid item> 
                    <h1>Your Query is Submitted We will Contact you Shortly</h1>
                    <Link to="/">
                        Go Home
                    </Link>
                </Grid>
            </Grid>
        </>)
}

export default Submission;