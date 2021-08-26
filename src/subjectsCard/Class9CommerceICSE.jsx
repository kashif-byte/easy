import React from 'react';
import { Typography, Grid, makeStyles} from '@material-ui/core'
import CourseCard from '../reusableComponent/CourseCard/CourseCard';
import Commerce from './../Images/SubjectImage/Commerce.png'
import Economics from './../Images/SubjectImage/economic.png'

const useStyles = makeStyles((theme)=>({
    heading:{
        fontWeight: 'bold',
        color: theme.palette.common.lightGrey
    }
}))
function Class9CommerceICSE(props) {
    const classes = useStyles()
    return (
        <>
        <Grid container alignItems="center" justifyContent="center">
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <Grid>
                    <Typography variant='h4' className={classes.heading}>Class 9 commerce ICSE</Typography>
                </Grid>
            </Grid>
            <Grid container item lg={9} alignItems="center" justifyContent="center">
                <CourseCard image={Commerce} heading='Commerce' text='Trade has all the fascination of gambling without its moral guilt.'/>
                <CourseCard image={Economics} heading='Economics' text='Economics is everywhere, and understanding economics can help you make better decisions and lead a happier life'/>
            </Grid>
        </Grid>
    </>
    );
}

export default Class9CommerceICSE;