import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import { useHistory } from 'react-router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

// const baseURL = "http://localhost:8000"
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select:{
    width: '100%'
  }
}));

function ContactUs() {
  const classes = useStyles();
  const history = useHistory()
  const [values, setValues] = useState(
        {
          name: '',
          email: '',
          contact: '',
          role: '',
          message: ''
        }
      )
      const [error, setError] = useState('')
      const [ valid, setValid] = useState(false)
      const handleValue = (e) => {
        e.preventDefault()
        setValues({ ...values, [e.target.name]: e.target.value })
      }
    
      const validate = () => {
        if (!values.name || !values.contact || !values.role) {
          setError('Please fill all the details.');
          setValid(true)
          return false;
        }
        else if (values.name.length < 3 && !/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(values.name)) {
          setError('Please enter a Valid name.');
          setValid(true)
          return false;
        }
        else if(values.email){
          if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            setError('Please enter a Valid emailId.');
            setValid(true)
            return false;
          }
        }
        if (values.contact.length != 10) {
          setError('Mobile number should have 10 digits.');
          setValid(true)
          return false;
        }
        else if (isNaN(values.contact)) {
          setError('Mobile number should have numbers only.');
          setValid(true)
          return false;
        }
        return true;
      }
      const postQuery = (e) => {
        e.preventDefault()
        if (validate()) {
          console.log(values)
          axios.post(`/query`, values).then((res)=>{
            history.push('/')
          }).catch((err)=>{
            console.log(err)
          })
        }
      }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactPhoneIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter Your Details
        </Typography>
        {valid?<Typography variant="h5">{error}</Typography>:null}
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleValue}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleValue}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contact"
            label="Mobile Number"
            type="text"
            autoComplete="current-password"
            onChange={handleValue}
          />
          <FormControl variant="outlined" className={classes.select} >
             <InputLabel id="demo-simple-select-outlined-label">You are</InputLabel>
             <Select
               labelId="demo-simple-select-outlined-label"
               id="demo-simple-select-outlined"
               name="role"
                // value={values.role}
                // onChange={handleChange}
               label="You are*"
               onChange={handleValue}
             >
               <MenuItem value={"Student"}>Student</MenuItem>
               <MenuItem value={"Teacher"}>Teacher</MenuItem>
             </Select>
           </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="message"
            label="Your message"
            name="message"
            rows={3}
            autoFocus
            onChange={handleValue}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={postQuery}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ContactUs
