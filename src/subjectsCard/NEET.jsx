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
function NEET(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>NEET</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Physics} heading='Physics' text='Physics is about questioning, studying, probing nature. You probe, and, if you are lucky you get strange clues.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Chemistry begins in the stars. The stars are the source of the chemical elements, which are the building blocks of matter and the core of our subject.'/>
                <CourseCard image={Biology} heading='Biology' text='Biology is the most powerful technology ever created. DNA is software, protein are hardware, cells are factories.'/>
                
            </Grid>
        </Grid>
    </>
    );
}

export default NEET;