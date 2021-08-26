import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Commerce from './../Images/SubjectImage/Commerce.png'
import Economics from './../Images/SubjectImage/economic.png'

const useStyles = makeStyles((theme)=>({
    heading:{
        fontWeight: 'bold',
        color: theme.palette.common.lightGrey
    }
}))
function Class10CommerceICSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 10 Commerce ICSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Commerce} heading='Commerce' text='I am a firm believer in the circle of commerce.'/>
                <CourseCard image={Economics} heading='Economics' text='Economics qualifies the test of education but fails the test of emotions.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class10CommerceICSE;