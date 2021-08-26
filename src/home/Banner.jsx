import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core'
import bannerImage from './../Images/Home/bannerImage.png'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: theme.palette.common.darkBlack,
    },
    btn: {
        padding: '1rem',
        borderRadius: '2rem',
        width: '15rem',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        margin: '0 3rem',
        [theme.breakpoints.down('md')]: {
            width: '14rem',
            fontSize: '0.9rem',
            margin: '0 1.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '2rem'
        },
    },
    img: {
        width: '100%',
        height: 'auto',
    },
    imgContainer: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: '3rem'
        }
    },
    spanText: {
        color: theme.palette.primary.main,
        fontWeight: 'bolder'
    },
    heroText: {
        paddingLeft: '3rem',
        color: 'white',
        fontSize: '2.5rem',
        margin: '3rem 2rem 2rem 2rem'
    },
}))

function Banner() {
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.Container}>
                <Grid item container sm={12} md={6} alignItems="center" justifyContent="center">
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid container alignItems="center" justifyContent="center">
                            <p className={classes.heroText}>
                                Get your Dream Marks with our experience teacher's classes, <br />
                                with guaranteed and <span className={classes.spanText}>pay later</span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid >
                            <Button variant="contained" color="primary" className={classes.btn} component={Link}
                    onClick={() => window.location = '/our-program'}>
                                Join Online Class
                            </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" color="primary" className={classes.btn} component={Link}
                    onClick={() => window.location = '/get-tutor'}>
                                Get Tutor
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={6} justifyContent="center" className={classes.imgContainer}>
                    <img src={bannerImage} alt="banner" className={classes.img} />
                </Grid>
            </Grid>
        </>
    );
}

export default Banner;