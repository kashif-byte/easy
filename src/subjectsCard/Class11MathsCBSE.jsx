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
function Class11MathsCBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 11 Maths CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='Physics is essentially an intuitive and concrete science.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Chemistry states the more energy you put into a bond the harder it is to break.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class11MathsCBSE;