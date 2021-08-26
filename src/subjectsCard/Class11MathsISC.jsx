import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Calculator from './../Images/SubjectImage/calculator.png'
import Physics from './../Images/SubjectImage/physics.png'
import Chemistry from './../Images/SubjectImage/chemistry.png'
const useStyles = makeStyles((theme)=>({
    heading:{
        fontWeight: 'bold',
        color: theme.palette.common.lightGrey
    }
}))
function Class11MathsISC(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 11 Maths ISC</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='The organic material, as the laws of chemistry state, can neither be created nor destroyed.'/>
                <CourseCard image={Calculator} heading='Maths' text='I’ve always enjoyed mathematics. It is the most precise and concise way of expressing an idea.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class11MathsISC;