import React from 'react';
import { Button, Grid, Hidden, makeStyles,useMediaQuery, useTheme } from '@material-ui/core';
import BannerImg from './../Images/Home/bannerImage.png';
import OneToOneInteraction from './../Images/Home/1To1Interaction.svg';
import TalkToUs from './../Images/Home/TalkToUs.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.common.lightBlack,
    },
    spanText:{
      color:theme.palette.primary.main,
      fontWeight:'bolder'
    },
    heroText: {
        paddingLeft: '3rem',
        color: 'white',
        fontSize: '3rem',
        margin: '3rem 2rem 2rem 2rem'
    },
    btn: {
        padding: '1rem',
        marginLeft:'5rem',
        borderRadius: '2rem',
        width: '15rem',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        margin: '0 3rem',
        [theme.breakpoints.down('md')]: {
            width: '11rem',
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
    container1:{
            margin: '2rem 0'
    },
    para1: {
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    secondImage: {
        width: '30rem',
        [theme.breakpoints.down('sm')]: {
            width: '25rem'
        },
    }


}));

const OurProgramBanner = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
        <Grid container className={classes.container}>
                <Grid container>
                    <Hidden smDown>
                        <Grid item xs={12} md={6} className={classes.imgContainer}>
                            <img src={BannerImg} alt="banner" className={classes.img} />
                        </Grid>
                    </Hidden>

                    <Grid item container direction='column' xs={12} md={6} justifyContent="center">
                        <p className={classes.heroText}>
                        Get Your Dream Result <br/>
                                <span className={classes.spanText}>Pay Later</span>
                        </p>
                            <Grid item>
                            <Button variant="contained" color="primary" className={classes.btn} component={Link}
                    onClick={() => window.location = '/paylater-form'}>
                                Apply Now
                            </Button>
                            </Grid>
                        </Grid>
                </Grid>
        </Grid>
        <Grid container className={classes.container1}>
                <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <img src={OneToOneInteraction} alt="Interaction" className={classes.secondImage} />
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <p className={classes.para1}>8 months intensive teaching <br /> by our teachers & get <br/> your dream result</p>
                    </Grid>
                </Grid>
        </Grid>
        <Grid container style={{ background:'#C5C6C7'}}>
        <Grid container lg={9} alignItems="center" justifyContent="center" style={{  margin: '0 auto'  }} >
                <Grid item container sm={12} md={6}  alignItems="center" justifyContent="center">
                    <Grid container>
                    <p className={classes.para1}>Take our admission <br /> test</p>
                    </Grid>
                    <Grid container>
                    <Button variant="contained" color="primary" className={classes.btn} component={Link}
                    onClick={() => window.location = '/paylater-form'}>Start</Button>
                    </Grid>
                </Grid>
                <Grid  sm={12} md={6}  alignItems="center" justifyContent="center" >
                    <img src={TalkToUs} alt="counsellorImg" className={classes.img}/>
                </Grid>
        </Grid>
        </Grid>

        </>

    );
};

export default OurProgramBanner;
