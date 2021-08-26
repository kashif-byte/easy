import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    
}))
function MiddleSection2(props) {
    const classes = useStyles()
    return (
        <div>
            <Grid container>
            <Grid container lg={9} alignItems="center" justifyContent="center" style={{ margin: '0 auto' }} >
                <Grid item container sm={12} md={6}  alignItems="center" justifyContent="center">
                    <Grid md={12}>
                    <h1><span className={classes.spanText}>Still in doubt.</span><br/> Talk to our councellor</h1>
                    </Grid>
                    <Grid  md={12}>
                    <Button variant="contained" color="primary" className={classes.btn}>Contact Us</Button>
                    </Grid>
                </Grid>
                <Grid  sm={12} md={6}  alignItems="center" justifyContent="center" >
                    <img src={TalkToUs} alt="counsellorImg" className={classes.img}/>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}

export default MiddleSection2;