import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Biology from './../Images/SubjectImage/biology.png'
import Calculator from './../Images/SubjectImage/calculator.png'
import Physics from './../Images/SubjectImage/physics.png'
import Chemistry from './../Images/SubjectImage/chemistry.png'
const useStyles = makeStyles((theme)=>({
    heading:{
        fontWeight: 'bold',
        color: theme.palette.common.lightGrey
    }
}))
function Class12CommerceCBSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 12 Commerce CBSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biolgy' text='Biology is the study of complicated things that give the appearance of having been designed for a purpose'/>
                <CourseCard image={Physics} heading='Physics' text='The organic material, as the laws of chemistry state, can neither be created nor destroyed.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='The organic material, as the laws of chemistry state, can neither be created nor destroyed.'/>
                <CourseCard image={Calculator} heading='Maths' text='Mathematics is a game played according to certain simple rules with meaningless marks on paper.'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class12CommerceCBSE;