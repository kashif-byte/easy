import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

    headerSpan: {
        color: theme.palette.primary.main
    },
    header: {
        color: theme.palette.common.darkGrey,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7rem'
        }
    },
    container: {
        padding: '0% 0 2% 0',
        [theme.breakpoints.down('sm')]: {
            padding: '3% 0 7% 0'
        }
    },
    mGrid1: {
        backgroundColor: theme.palette.common.lightGrey,
        "&:hover": {
            boxShadow: '0 0 40px 10px lightgrey'
        }
    },

    middleRow1: {
        background: theme.palette.primary.main,
        padding: "4% 4%",
        overFlow: 'hidden'
    },
    firstRow: {
        padding: "4% 4%",
        background:'#45A29E',

    },
    lastRow: {
        padding: "4% 4%"

    },
    feeInfoWrapper: {
        marginBottom: '2rem'
    }
}))

const ProgramOutline = () => {
    const classes = useStyles();

    return (
        <>
                <Grid container className={classes.container} justify="center" direction='column'>
                    <Grid item style={{ marginBottom: '3%',marginTop:'2%' }}>
                        <Typography variant='h6' className={classes.header}>
                            Program<span className={classes.headerSpan}> Outline</span>
                        </Typography>
                    </Grid>
                    <Grid item container justify="space-around" className={classes.OuterContainer}>
                        <Grid item container xs={12} md={7} direction="column" className={classes.feeInfoWrapper}>
                            <Grid item container className={classes.mGrid1} justify="center">
                                <Grid container direction="column">
                                    <Grid container direction="row" className={classes.firstRow} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }}>
                                       4-6 Months: &#x20B9; Course Completion
                                    </Typography>
                                    </Grid>
                                    <Grid container direction="row" className={classes.middleRow1} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }} >
                                        2 Months: &#x20B9; Revision & preparation for exam
                                    </Typography>
                                    </Grid>
                                    <Grid container direction="row" className={classes.lastRow} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }} >
                                        3 exams at end of Course Completion
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                </Grid>
                </Grid>
        </>
    )
};

export default ProgramOutline;