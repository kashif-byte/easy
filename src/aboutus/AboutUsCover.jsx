import React from 'react';
import { Grid, Hidden, makeStyles, Typography } from '@material-ui/core';
//import aboutus from './../Images/Aboutus/aboutus.jpeg';
import aboutus from './../Images/Home/bannerImage.png';

const useStyles = makeStyles(theme => ({
    container: {
        width:'100%',
        padding:'3rem 3rem 0 3rem',
        backgroundColor: theme.palette.common.darkBlack,
        [theme.breakpoints.down('sm')]: {
            padding: '7% 5%',
        }
    },
    textContainer: {
        padding: '0',
        [theme.breakpoints.down('sm')]: {
            padding: '0',

        }
    },
    header: {
        color: 'white',
        fontWeight: '900',
        fontSize: '4.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
        }
    },
    headerBtn: {
        padding: '1% 2% 1% 1%',
        lineHeight: '1.5',
        fontWeight: '900',
        backgroundColor: theme.palette.secondary.main,
        fontSize: '4.5rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem',
            fontSize: '3.5rem'
        }
    },
    img: {
        width: '80%',
    },
    missionHeader: {
        fontSize: '3rem',
        marginBottom: '2rem'
    },
    ourText: {
        borderBottom: `5px ${theme.palette.secondary.main} solid`,
    }
}));

const AboutUsCover = () => {

    const classes = useStyles();

    return (
       
            <Grid container className={classes.container}>
                <Grid item xs={12} md={6} className={classes.imgContainer}>
                    <Hidden xsDown>
                        <img src={aboutus} alt="About Us" className={classes.img} />
                    </Hidden>
                </Grid>
                <Grid item container xs={12} md={6} className={classes.textContainer} alignItems="center">
                    <Grid item>
                        <Typography variant='h1' className={`${classes.header} ${classes.missionHeader}`}>
                            <span className={classes.ourText}>Our </span>Mission:
                        </Typography>
                        <Typography variant='h1' className={classes.header}>
                            To Make India<br />
                            <span className={classes.headerBtn}>Educated</span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
       
    );
};

export default AboutUsCover;