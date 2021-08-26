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
function Class12MathsISC(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 12 Maths ISC</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='The laws of physics is the canvas God laid down on which to paint his masterpiece.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='To think is to practice brain chemistry.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics is the most beautiful and most powerful creation of the human spirit.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class12MathsISC;