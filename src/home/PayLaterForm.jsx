import React,{useState} from 'react';
import { Typography, Grid, makeStyles,Button,TextField,FormControl,InputLabel,Select,MenuItem,Paper} from '@material-ui/core';
import axios from 'axios'
import { useHistory } from "react-router-dom";


// const baseURL = 'http://localhost:8000'

const useStyles = makeStyles((theme) => ({
    formControl:{
        minWidth: '100%',
        margin:'2% 0'
      },
  error: {
    color: 'red',
    textAlign: 'center'
},
paperStyle:{
    padding:'2% 5%',
     height:'80%',
     width:'50%',
     [theme.breakpoints.down('sm')]: {
        width:'90%',
    }
},
header:{
    marginBottom:'2%'
}
}));

export default function PayLaterForm() {
  const classes = useStyles();
  const history = useHistory()
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    name: '',
    class:'',
    email: '',
    number: '',
    message: ''
});
    const handleValues = (event) => {
      setValues({
          ...values,
          [event.target.name]: event.target.value
      })
  }
  const validate = () => {
    if(!values.name || !values.number || !values.class){
        setError('Please fill all the details.');
        return false;
    }
    if(values.name.length < 3 && !/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(values.name)){
        setError('Please enter a valid name.');
        return false;
    }
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
        setError('Please enter a valid emailId.');
        return false;
    }
    if(values.number.length !== 10){
        setError('Mobile number should have 10 digits.');
        return false;
    }
    if(isNaN(values.number)){
        setError('Mobile number should have numbers only.');
        return false;
    }
    return true;
}
const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()){
      axios.post(`/postPayLater`, values).then((res)=>{
        history.push('/')
      }).catch((err)=>{
        history.push('/')
      })
     console.log(values)
}
}
    return (
        <>
            <Grid container direction='column' justify="center" alignItems="center" style={{margin:'3% auto',}}>
            <Typography variant="h5" className={classes.header}>
                       Fill your details
                    </Typography>
                    <Typography variant="body2" className={classes.error}>{error}</Typography>
            <Paper elevation={5} className={classes.paperStyle}>
          <TextField
            variant="outlined"
            margin="dense"
            name="name"
            label="Name"
            type="text"
            value={values.name}
            onChange={handleValues}
            required
            fullWidth
          />
           <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
        <Select
          label="Class"
          name="class"
          margin="dense"
          value={values.class}
          onChange={handleValues}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10th</MenuItem>
          <MenuItem value={12}>12th</MenuItem>
        </Select>
      </FormControl>
           <TextField
            variant="outlined"
            margin="dense"
            name="email"
            label="Email Address"
            value={values.email}
            type="email"
            fullWidth
            onChange={handleValues}
          />
           <TextField
            margin="dense"
            variant="outlined"
            name="number"
            label="Contact Number"
            required
            value={values.number}
            type="text"
            fullWidth
            onChange={handleValues}
          />

      <TextField
            margin="dense"
            variant="outlined"
            name="message"
            label="Message"
            value={values.message}
            type="text"
            fullWidth
            multiline
            onChange={handleValues}
            rows={1}
          />
          <Grid item container justify="flex-end" direction="row" >
                        <Grid item>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            onClick={handleSubmit}
                        >
                        Submit
                        </Button>
                        </Grid>
                    </Grid>
          
           </Paper>
           </Grid>

        </>
    );
}

