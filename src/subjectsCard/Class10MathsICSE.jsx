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
function Class10MathsICSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 10 Maths ICSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='Science is a way of thinking much more than it is a body of knowledge.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Positive working people are the hydrogen bonds of motivation.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics is a game played according to certain simple rules with meaningless marks on paper.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class10MathsICSE;