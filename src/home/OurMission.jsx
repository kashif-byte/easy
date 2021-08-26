import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        color: theme.palette.secondary.main,
        marginBottom: 0
    },
    message: {
        textAlign: 'center',
        fontSize: '1.2rem'
    },
    container:{
        margin:'2rem'
    }
}))
function OurMission() {
    const classes = useStyles()
    return (
        <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
            <Grid container direction="column" alignItems="center" justifyContent="center" className={classes.container}>
                <Grid>
                    <h1 className={classes.mainHeading}>Our Vision</h1>
                </Grid>
                <Grid justifyContent="center">
                    <p className={classes.message}>To help students to achieve their academic objectives by providing innovative and technology irrespective of their location. <br /> Also provide quality education at affordable cost</p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default OurMission;