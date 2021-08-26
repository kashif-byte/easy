import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core'
import bannerImage from './../Images/Coding/bannerImage.png'
const useStyles = makeStyles((theme) => ({
    Container: {
        // padding: '0 2rem',
        backgroundColor: theme.palette.common.darkBlack,
        
    },
    btn: {
        padding: '0.8rem',
        borderRadius: '2rem',
        width: '18rem',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        margin: '0 0 5rem 4.8rem',
        [theme.breakpoints.down('md')]: {
            width: '18rem',
            fontSize: '1.1rem',
            margin: '0 0 5rem 4.8rem'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '2rem auto'
        },
    },
    img: {
        width: '100%',
        height: 'auto',
    },
    heroText: {
        paddingLeft: '3rem',
        color: 'white',
        fontSize: '2rem',
        margin: '3rem 2rem 0 2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.6rem'
        },
    },
    imgContainer: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: '3rem'
        }
    },
    text:{
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        padding:'0.2rem' ,
        borderRadius : '0.7rem',
        fontWeight: 'bold' ,
        display: 'inline-block',
        margin: '0.5rem 0.5rem'  }
}))

function Banner() {
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.Container}>
                <Grid item container sm={12} md={6} alignItems="center" justifyContent="center">
                    <Grid  container alignItems="center" justifyContent="center">
                        <Grid container alignItems="center" justifyContent="center">
                            <p className={classes.heroText}>
                                Get your Dream Marks with our experience teacher's classes, <br />
                                with guaranteed and <span className={classes.text}>pay later</span>
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" >
                            <Button variant="contained" color="primary" className={classes.btn}>
                                Checkout Our Courses
                            </Button>
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