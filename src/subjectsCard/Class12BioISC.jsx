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
function Class12BioISC(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 12 Bio ISC</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Biology} heading='Biology' text='Biology is the study of complicated things that give the appearance of having been designed for a purpose'/>
                <CourseCard image={Physics} heading='Physics' text='Scientists have become the bearers of the torch of discovery in our quest for knowledge.'/>
                <CourseCard image={Chemistry} heading='Chemistry' text='Organic chemistry is the study of organs; inorganic chemistry is the study of the insides of organs.'/>
                
            </Grid>
        </Grid>
    </>
    );
}

export default Class12BioISC;