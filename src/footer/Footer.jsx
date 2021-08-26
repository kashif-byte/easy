import { Grid, makeStyles, Typography, Hidden, BottomNavigation } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import fb from './../Images/footer/fb.svg';
import insta from './../Images/footer/Instagram.svg';
import linkedin from './../Images/footer/linkedin.svg';
import ContactUs from '../contactForm/ContactUs';
import logo from './../Images/Home/logo.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        
        bottom: 0,
        padding: '2% 2%',
        width: '100%',
        bottom: 0,
        background: theme.palette.common.lightBlack,
        [theme.breakpoints.down('sm')]: {
            padding: '5% 5%'
        }
      },
    container: {
        
    },
    header: {
        color: theme.palette.primary.main
    },
    topSubHeader: {
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            marginTop: '1rem'
        }
    },
    moonshotDesc: {
        textAlign: 'justify',
        fontSize: '1rem'
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        color: 'white',
        fontSize: '1rem',
        lineHeight: 1.8,
        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    logo: {
        height: 100,
        width: 250
    },
    logoImg: {
        height: 40
    },
    footerContainer: {
        background: theme.palette.common.lightBlack
    },
    font:{
        fontSize: '1.3rem',
        color: 'white',
        fontWeight: 'bold'
    },
    copyContainer: {
        padding: '1rem 0',
        background: theme.palette.primary.main,
        color: 'white'
    }
}))

const Footer = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
           
        
                <Grid container className={classes.root} justify='center'>
                    <Grid item xs={12} md={4}>
                        <img src={logo} className={classes.logo} alt="logo" />
                        <Typography variant='h5' className={classes.font}>
                            Easy Educator
                        </Typography>
                        <Typography variant='h5' className={classes.font}>
                            Keshav Nagar, <br /> Lucknow <br />   8318583504, 9140872834
                        </Typography>

                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" direction="column" item xs={12} md={4}>
                        <Typography variant='body1' component={Link} to='/contactUs'>
                            Contact Us
                        </Typography>
                        <Typography variant='body1' component={Link} to='/our-program' className={classes.link}>
                        Our Program
                        </Typography>
                        <Typography variant='body1' component={Link} to='/aboutus' className={classes.link}>
                            
                            About Us
                        </Typography>
                        {/* <Typography variant='body1' className={classes.link}>
                            Privacy Policy
                        </Typography> */}
                    </Grid>
                    <Grid item xs={12} md={4} container alignItems="center" justifyContent="center" direction="column" >
                        <Typography variant='body1' className={classes.topSubHeader} >

                            <img src={fb} className={classes.logoImg} alt="logo" />
                        </Typography>
                        <Typography variant='body1' className={classes.topSubHeader} >

                            <img src={insta} className={classes.logoImg} alt="logo" />
                        </Typography>
                        <Typography variant='body1' className={classes.topSubHeader} >

                            <img src={linkedin} className={classes.logoImg} alt="logo" />
                        </Typography>
                    </Grid>
                </Grid>
                

        </>
    );
};

export default Footer;