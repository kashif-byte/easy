import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Biology from './../Images/SubjectImage/biology.png'
import Physics from './../Images/SubjectImage/physics.png'
import Chemistry from './../Images/SubjectImage/chemistry.png'
const useStyles = makeStyles((theme)=>({
    heading:{
        fontWeight: 'bold',
        color: theme.palette.common.lightGrey
    }
}))
function Class12BioCBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 12 Bio CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biology' text='I like to define biology as the history of the earth and all its life - past, present, and future.'/>
                <CourseCard image={Physics} heading='Physics' text='Quantum attention functions are the keys to quantum machine learning.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Every band needs its own special chemistry And Bez was a very good chemist.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class12BioCBSE;