import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

const UseStyles = makeStyles((theme) => ({
    container: {
        height: '100vh'
    }
}))

const Demo = () => {
    const classes = UseStyles()
    return (
        <>
            <Grid container alignItems="Center" justifyContent="center" className={classes.container}>
                <Grid item> 
                    <h1>Your query has been submitted we will contact you shortly</h1>
                    <Link to="/">
                        Go Home
                    </Link>
                </Grid>
            </Grid>
        </>)
}

export default Demo;

