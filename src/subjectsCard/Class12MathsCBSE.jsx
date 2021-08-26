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
function Class12MathsCBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 12 Maths CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='If the universe is an artificial simulation then the mathematics is its code and a physicist is a programmer.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='We define organic chemistry as the chemistry of carbon compounds.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class12MathsCBSE;