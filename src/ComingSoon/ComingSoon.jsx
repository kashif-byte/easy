import React from 'react';
import { Button, Grid, makeStyles, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
const UseStyles = makeStyles((theme) => ({
    App: {
        height: '100vh',
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(102,252,241,1) 35%, rgba(0,212,255,1) 100%)',
    },
    h1: {
        paddingTop: '15%',
        margin: '0',
        textAlign: 'center',
        color: 'white'
    },
    btn: {
        padding: '1rem',
        borderRadius: '2rem',
        width: '15rem',
        backgroundColor: theme.palette.common.lightGrey,
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginTop: '1rem',
    },

}))

function ComingSoon(props) {
    const classes = UseStyles()
    return (
        <Grid className={classes.App}>
            <Grid className={classes.container}>
                <h1 className={classes.h1}>
                    Working for your future
                    <br />
                    Coming Soon
                    <br />
                    Having any query
                </h1>
                <Box textAlign='center'>
                    <Button variant="primary" className={classes.btn}
                    component={Link}
                    onClick={() => window.location = '/contactUs'}>Contact Us</Button>
                </Box>

            </Grid>
        </Grid>
    );
}

export default ComingSoon;