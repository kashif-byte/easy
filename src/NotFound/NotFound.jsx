import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

const UseStyles = makeStyles((theme) => ({
    container: {
        height: '100vh'
    }
}))

const NotFound = () => {
    const classes = UseStyles()
    return (
        <>
            <Grid container alignItems="Center" justifyContent="center" className={classes.container}>
                <Grid item> 
                    <h1>404 - Page Not Found!</h1>
                    <Link to="/">
                        Go Home
                    </Link>
                </Grid>
            </Grid>
        </>)
}

export default NotFound;