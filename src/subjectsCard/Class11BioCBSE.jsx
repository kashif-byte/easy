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
function Class11BioCBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 11 Bio CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biology' text='Biology is the most powerful technology ever created. DNA is software, protein are hardware, cells are factories.'/>
                <CourseCard image={Physics} heading='Physics' text='If the universe is an artificial simulation then the mathematics is its code and a physicist is a programmer.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Chemistry is necessarily an experimental science: its conclusions are drawn from data, and its principles supported by evidence from facts.'/>
               
            </Grid>
        </Grid>
    </>
    );
}

export default Class11BioCBSE;