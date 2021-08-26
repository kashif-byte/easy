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
function Class9MathICSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 9 Math ICSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='Imagination is more important than knowledge.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Every man who receives a liberal education now counts chemistry among the most indispensable objects of his studies.'/>
                <CourseCard image={Calculator} heading='Maths' text='The power of mathematics is often to change one thing into another, to change geometry into language.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class9MathICSE;