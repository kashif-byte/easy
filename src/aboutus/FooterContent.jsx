import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        padding: "4% 0",
        backgroundColor: theme.palette.common.lightGrey,
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 5%'
        }
    },
    header: {
        fontSize: '4em',
        color:'white',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },
    content: {
        padding: '1.2rem 13rem',
        lineHeight: '1.8rem',
        textAlign: 'justify',
        color: 'white',
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 0'
        }
    },
    startBtn: {
        textTransform: 'none',
        borderRadius: '50px',
        padding: '4px 54px',
        marginTop: '1rem',
        fontWeight: '700',
        fontSize: '1.7rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem',
            fontSize: '1.3rem'
        }
    },
    btnRoot: {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
           boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
        }
    }
}));

const FooterContent = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Grid container className={classes.container} >
            <Container maxWidth="lg">
                <Grid container justify="center" direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h1" className={classes.header}>
                            Join Our classes
                        </Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant="body1" className={classes.content}>
                                For your golden Future
                            </Typography>
                    </Grid>
                    <Grid item >
                        <Button
                            disableElevation
                            variant='contained'  
                            className={classes.startBtn}
                            color="secondary"
                            classes={{
                                containedSecondary: classes.btnRoot
                            }}
                            component={Link} to="/contactUs">
                            Contact Us
                         </Button>
                    </Grid>
                </Grid>
            </Container>
        </Grid>

    );
};

export default FooterContent;