import React from 'react';
//import Card from './TalentProfileCard';
import { Grid, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        background: theme.palette.common.lightCream,
        //minHeight: '500px',
        borderRight: '5px solid white',
        borderLeft: '5px solid white',
        [theme.breakpoints.down('sm')]: {
            //minHeight: 450
        }
    },
    name: {
        fontSize: "1.5rem",
        fontWeight: 'bolder'
    },
    role: {
        fontSize: "1rem",
        fontWeight: '400'
    },
    text: {
        fontSize: "1rem",
        fontWeight: '900',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: "1rem"
        }
    },
    expDesign: {
        background: theme.palette.common.lightGreen,
        padding: '5% 10%',
        marginTop: 'auto',
       // minHeight: '70px',
        [theme.breakpoints.down('sm')]: {
            minHeight: '80px'
        }
    },
    description: {
        fontSize: "1.4rem",
        fontWeight: 'bold',

    },
    descriptionDesign: {
        padding: '5%',
        textAlign: 'justify'
    },
    img: {
        width: '100%',
        marginBottom: '5%',
        maxHeight: 318
    }

}));

const Card = (props) => {
    const { img, name, percentage, school , standard} = props.data;
    const classes = useStyles();

    return (
        <Grid container justify="flex-start" alignItems="center" direction="column" className={classes.gridContainer}>
            <img src={img} alt="banner" className={classes.img} />
            <Grid item direction="column">
                <Grid container justify="center">
                    <Typography variant="h6" className={classes.name}>
                        {name}
                    </Typography>
                </Grid>
                <Grid container justify="center">
                    <Typography variant="h6" className={classes.role}>
                        {standard}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" align="center" className={classes.descriptionDesign}>
                <Typography variant="body2" className={classes.description}>
                {percentage}
                </Typography>
            </Grid>
            <Grid container justify="center" alignItems="center" align="center" className={classes.expDesign}>
                <Typography variant="body2" className={classes.text}>
                    {school}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Card;