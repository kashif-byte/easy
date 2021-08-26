import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import OurProgramBanner from './OurProgramBanner';
import ProgramFees from './ProgramFees';
import ProgramOutline from './ProgramOutline';

const useStyles = makeStyles(theme => ({
    text: {
        color: theme.palette.primary.main
    }
}));




const OurProgram = () => {
    const classes = useStyles();
    return (
        <div >
            <OurProgramBanner />
            <Grid container justifyContent="center">
                <ProgramOutline />
                <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '1%' }}>
                    Program Fees
                </Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Grid lg={6} item container  justifyContent="center" style={{ marginBottom: "1rem", marginTop: '0.5rem', background: '#C5C6C7' }}>
                    <Typography variant="h5" style={{ fontWeight: 'bold', padding: '3% 0' }}>
                        For Class 9th (Foundation Course) <span className={classes.text}><br /> Program Fees - 20,000</span>
                    </Typography>
                </Grid>
            </Grid>
            <ProgramFees
                heading="10th"
                afterResultEnrollmentFees="Zero "
                afterResultFees="30,000"
                resultAssistanceEnrollmentFees="Zero"
                resultAssistanceFees="2500"
            />
            <Grid container justifyContent="center">
                <Grid lg={6} item container  justifyContent="center" style={{ marginBottom: "1rem", marginTop: '0.5rem', background: '#C5C6C7' }}>
                    <Typography variant="h5" style={{ fontWeight: 'bold', padding: '3% 0' }}>
                        For Class 11th (Foundation Course) <span className={classes.text}><br /> Program Fees - 40,000</span>
                    </Typography>
                </Grid>
            </Grid>
            <ProgramFees
                heading="12th"
                afterResultEnrollmentFees="Zero "
                afterResultFees="50,000"
                resultAssistanceEnrollmentFees="Zero"
                resultAssistanceFees="4000"
            />
            <Grid container justify="space-around">
                <Grid item container md={4} justifyContent="center" style={{ marginBottom: "1rem", marginTop: '0.5rem', background: '#C5C6C7' }}>
                    <Typography variant="h5" style={{ fontWeight: 'bold', padding: '3% 0' }}>
                        For JEE & NEET <span className={classes.text}><br /> Comming Soon...</span>
                    </Typography>
                </Grid>
                <Grid item container md={4} justifyContent="center" style={{ marginBottom: "1rem", background: '#C5C6C7' }}>
                    <Typography variant="h5" style={{ fontWeight: 'bold', padding: '3% 0' }}>
                        For NET & JRF <span className={classes.text}><br /> Comming Soon ...</span>
                    </Typography>
                </Grid>
            </Grid>

        </div>
    );
};

export default OurProgram;