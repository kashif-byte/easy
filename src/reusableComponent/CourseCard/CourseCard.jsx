import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: '2rem'
    },
    media: {
        height: 140,
    },
});

export default function CourseCard(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    {/* <CardMedia
                        className={classes.media}
                        style = {{ height: 0,
                            paddingTop: '56.25%',
                            marginTop:'30'}}

                        image={require('Images/SubjectImage/biology.png')}
                        title="Contemplative Reptile"
                    /> */}
                    <CardMedia>
                        <img src={props.image} alt="subjectImages"/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.heading}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Enroll Now
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
