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
function JEE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>JEE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='Science is bound, by the everlasting vow of honour, to face fearlessly every problem which can be fairly presented to it.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Chemistry is necessarily an experimental science: its conclusions are drawn from data, and its principles supported by evidence from facts.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics is a game played according to certain simple rules with meaningless marks on paper.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default JEE;