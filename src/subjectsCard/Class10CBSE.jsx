import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Biology from './../Images/SubjectImage/biology.png'
import Calculator from './../Images/SubjectImage/calculator.png'
import Physics from './../Images/SubjectImage/physics.png'
import Chemistry from './../Images/SubjectImage/chemistry.png'
const useStyles = makeStyles((theme)=>({
    heading:{
        fontWeight: 'bold',
        color: theme.palette.common.lightGrey
    }
}))
function Class10CBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 10 CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biology' text='Biology is the study of the complex things in the Universe.'/>
                <CourseCard image={Physics} heading='Physics' text='Physics is essentially an intuitive and concrete science.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='We define organic chemistry as the chemistry of carbon compounds.'/>
                <CourseCard image={Calculator} heading='Maths' text='The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class10CBSE;