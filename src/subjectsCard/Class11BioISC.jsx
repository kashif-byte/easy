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
function Class11BioISC(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 11 Bio ISC</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biology' text='Biology will relate every human gene to the genes of other animals and bacteria, to this great chain of being.'/>
                <CourseCard image={Physics} heading='Physics' text='The science of today is the technology of tomorrow.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='If you are not part of the solution , you are part of the precipitate.'/>
                
            </Grid>
        </Grid>
    </>
    );
}

export default Class11BioISC;