import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    img: {
        width: 150,
        height: 150
    },
    headings: {
        color: theme.palette.common.darkBlack,
        fontSize: '1.4rem',
        fontWeight: 'bold'
    },
    subHeading: {
        color: theme.palette.common.lightGrey,
        fontSize: '1rem'
    },
    container:{
        margin: '2rem 0'
    },
    bullet:{
        fontSize: 'small'
    }
}));

function CourseOutlined(props) {
    const classes = useStyles()
    return (
        <>
            <Grid container justifyContent="center" className={classes.container}>
                <Grid item lg={8} container justifyContent="flex-start">
                    <Grid>
                        <img src={props.image} alt='Biology' className={classes.img} />
                    </Grid>
                    <Grid>
                        <Typography className={classes.headings}>{props.heading}</Typography>
                        <Typography className={classes.subHeading}>{props.subheading}</Typography>
                    </Grid>
                </Grid>
                <Grid item lg={8}>
                    {props.syllabus.map((value, index) => {
                       return <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography className={classes.heading}>{index + 1}) {value.chapter}</Typography>
                            </AccordionSummary>
                            {value.topics.map((topic, index) => {
                                return <AccordionDetails>
                                    <Typography>
                                       <FiberManualRecordIcon className={classes.bullet}/> {topic}
                                        <br/>
                                    </Typography>
                                </AccordionDetails>
                            })}
                        </Accordion>
                    })}
                </Grid>
            </Grid>
        </>
    );
}

export default CourseOutlined;