import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import Carousal from './Carousal.jsx';
import Card from './Card';
import arr from './Students';
const useStyles = makeStyles(theme => ({
    caraousal: {
        background: 'tranparent',
        width: '70%'
    },
    headerSpan: {
        color: theme.palette.primary.main
    },
    header: {
        color: theme.palette.common.darkGrey,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '2.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7rem'
        }
    },
    imgContainer: {
        background: 'white'
    },
    container: {
        padding: '0 0 7% 0',
        [theme.breakpoints.down('sm')]: {
            padding: '5% 0'
        }
    },
    headerWrapper: {
        marginBottom: '7%',
    },
    carousalWrapper: {
        padding: '0 10%',
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    }
}));

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
};

const StudentComp = () => {
    const classes = useStyles();

    return (
            <Grid container direction='column' className={classes.container}>
                <Grid item className={classes.headerWrapper}>
                    <Typography variant="h5" className={classes.header}>
                        Our Excellent <span className={classes.headerSpan}>Students</span>
                    </Typography>
                </Grid>
                <Grid item container justify="center" className={classes.carousalWrapper}>
                    <Carousal
                        mouseTracking
                        items={arr.map((data) => {
                            return (
                                <Card data={{ ...data }} />
                            )
                        })}
                        responsive={responsive}
                    />
                </Grid>
            </Grid>
    )
};
export default StudentComp;