import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '4% 0',
        background: theme.palette.common.lightGrey,
        [theme.breakpoints.down('sm')]: {
            padding: '7% 5%',
            marginTop: 0
        }
    },
    textContainer1: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900',
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '4%'
    },
    textContainer2: {
        justifyContent: 'center'
    },
    aboutusText: {
        fontSize: '2.5rem',
        fontWeight: 900,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7rem'
        }
    },
    content: {
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        }
    },
    headerSpan: {
        color: theme.palette.primary.main
    }
}));

const AboutUsContent = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container} direction="column" alignItems="center">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item container className={classes.textContainer1} justify="center">
                            <Typography variant='h6' className={classes.aboutusText}>
                                About <span className={classes.headerSpan}>Us</span>
                            </Typography>
                        </Grid>
                        <Grid item className={classes.textContainer2} >
                            <Typography variant='body1' className={classes.content} >
                                <p>We provide excellent home tution service as well as online classes with our experience teachers. Contact us to take two days free demo class</p>
                            </Typography>
                        </Grid>
                        <Grid item className={classes.textContainer2} >
                            <Typography variant='body1' className={classes.content}>
                                <p> We provide Study material and online classes at cheaper rate as compared to market price <br/> <br/>
                                Our aim is to prepare student at competitive level</p>
                    </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>

    );
};

export default AboutUsContent;