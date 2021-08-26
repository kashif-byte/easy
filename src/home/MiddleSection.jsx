import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core'
import TalkToUs from './../Images/Home/TalkToUs.svg'
import careerGuidance from './../Images/Home/careerGuidance.svg'
import OneToOneInteraction from './../Images/Home/1To1Interaction.svg'
import Scheduled from './../Images/Home/scheduled.svg'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            width: '28rem',
            paddingRight: '3rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: '23rem',
            paddingLeft: '3rem'
        }
    },
    btn: {
        padding: '1rem',
        borderRadius: '2rem',
        width: '15rem',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        [theme.breakpoints.down('md')]: {
            width: '11rem',
            fontSize: '0.9rem',
            margin: '0 1.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: '8rem',
            fontSize: '0.9rem',
            margin: '0 1.5rem'
        },
    },
    spanText: {
        color: 'red'
    },
    firstContainer: {
        backgroundColor: theme.palette.common.lightGrey,
        padding: '4rem 0',
        margin: '2rem 0'
    },
    textColor: {
        color: theme.palette.primary.main,
        margin: '0 auto',
    },
    secondImage: {
        width: '30rem',
        [theme.breakpoints.down('sm')]: {
            width: '25rem'
        },
    },
    innercontainer: {
        margin: '0 2rem'
    },
    para1: {
        fontWeight: 'bold',
        fontSize: '1.3rem'
    },
    container: {
        margin: '2rem 0'
    },
}))
function MiddleSection(props) {
    const classes = useStyles()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Grid container className={classes.container}>
                <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <h1><span className={classes.spanText}>Still in doubt.</span><br /> Talk to our councellor</h1>
                        <Button variant="contained" color="primary" className={classes.btn} component={Link}
                    onClick={() => window.location = '/contactUs'}>Contact Us</Button>
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <img src={TalkToUs} alt="counsellorImg" className={classes.img} />
                    </Grid>
                </Grid>
            </Grid>
            <h1 style={{ textAlign: 'center' }}><span className={classes.textColor}>Teaching and Career guidance</span> like never before</h1>
            <Grid container className={classes.container}>
                <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <h1>Live lecture and private Tutor</h1>
                        <p className={classes.para1}>Online Live lecture with Up-to-date curriculum <br /> and experience private tutor</p>
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <img src={careerGuidance} alt="Live Lecture" className={classes.secondImage} />
                    </Grid>
                </Grid>
            </Grid>
            {matches?<Grid container className={classes.container}>
                <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                    <h1>Interaction with on regular basis</h1>
                        <p className={classes.para1}>Regular interaction with parents <br /> for best understanding of the student</p>
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                    <img src={OneToOneInteraction} alt="Interaction" className={classes.secondImage} />
                        
                    </Grid>
                </Grid>
            </Grid>:<Grid container className={classes.container}>
                <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <img src={OneToOneInteraction} alt="Interaction" className={classes.secondImage} />
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <h1>Interaction with on regular basis</h1>
                        <p className={classes.para1}>Regular interaction with parents <br /> for best understanding of the student</p>
                    </Grid>
                </Grid>
            </Grid>}
            
            <Grid container className={classes.container}>
                <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <h1>Well defined scheduled</h1>
                        <p className={classes.para1}>Well defined time table and scheduled<br />which meets latest curriculum of studies</p>
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <img src={Scheduled} alt="Scheduled" className={classes.secondImage} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default MiddleSection;