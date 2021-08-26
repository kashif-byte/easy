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
function Class9CBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 9 CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biology' text='Just like a single cell, the character of our lives is determined not by our genes but by our responses to the environmental signals that propel life.'/>
                <CourseCard image={Physics} heading='Physics' text='The study of physics is also an adventure. You will find it challenging, sometimes frustrating, occasionally painful, and often richly rewarding.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Chemistry is not anything an executive producer or writer can orchestrate or plan; you just hope for it.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics is a game played according to certain simple rules with meaningless marks on paper.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class9CBSE;