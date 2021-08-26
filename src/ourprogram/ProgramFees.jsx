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
    mHeading: {
        fontWeight: "900",
        padding: "5%",
        width: '100%',
        backgroundColor: theme.palette.primary.main,

    },
    mGrid1: {
        backgroundColor: theme.palette.common.lightGrey,
        "&:hover": {
            boxShadow: '0 0 40px 10px lightgrey'
        }
    },

    middleRow1: {
        background: '#ffdab3',
        padding: "4% 4%",
        overFlow: 'hidden'
    },
    middleRow2: {
        background:'#45A29E',
        padding: "4% 4%",
        overFlow: 'hidden'

    },
    firstRow: {
        padding: "4% 4%"

    },
    lastRow: {
        padding: "4% 4%"

    },
    feeInfoWrapper: {
        marginBottom: '2rem'
    }
}))

const ProgramFees = ({afterResultEnrollmentFees, afterResultFees, resultAssistanceEnrollmentFees, resultAssistanceFees,heading}) => {
    const classes = useStyles();

    return (
        <>
                <Grid container className={classes.container} justify="center" direction='column'>
                    <Grid item style={{ marginBottom: '3%' }}>
                        <Typography variant='h6' className={classes.header}>
                            For Class<span className={classes.headerSpan}>{" "}{heading}</span>
                        </Typography>
                    </Grid>
                    <Grid item container justify="space-around" className={classes.OuterContainer}>
                        <Grid item container xs={12} md={4} direction="column" className={classes.feeInfoWrapper}>
                            <Grid item container className={classes.mGrid1} justify="center">
                                <Typography variant="h5" align="center" className={classes.mHeading}>Result Guarantee</Typography>
                                <Grid container direction="column">
                                    <Grid container direction="row" className={classes.firstRow} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }}>
                                        Enrollment Fee: &#x20B9; {afterResultEnrollmentFees}/-
                                    </Typography>
                                    </Grid>
                                    <Grid container direction="row" className={classes.middleRow1} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }} >
                                        Fee after Result: &#x20B9; {afterResultFees}/-
                                    </Typography>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item container xs={12} md={4} direction="column" className={classes.feeInfoWrapper}>
                            <Grid item container className={classes.mGrid1} justify="center">
                                <Typography variant="h5" align="center" className={classes.mHeading}>Result Assistance</Typography>
                                <Grid container direction="column">
                                    <Grid container direction="row" className={classes.firstRow} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }} >
                                        Enrollment: &#x20B9; {resultAssistanceEnrollmentFees}
                                    </Typography>
                                    </Grid>
                                    <Grid container direction="row" className={classes.middleRow2} justify="center">
                                        <Typography variant="body1" style={{ fontWeight: '500' }}>
                                        Per Month Fee: &#x20B9; {resultAssistanceFees}/-
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

export default ProgramFees;