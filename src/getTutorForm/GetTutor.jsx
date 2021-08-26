import React, { useState } from 'react';
import { Typography, Grid, makeStyles,Paper,Container,Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import Subjects from './Subjects';
import Students from './Students';
import TeacherForm from './TeacherForm';
import tutor from './../Images/Home/Tutor.png';
import Demo from './Demo';
import axios from 'axios'

// const baseURL = 'http://localhost:8000'

const useStyles = makeStyles(theme => ({
    container: {
        padding: '2%',
        color: theme.palette.common.lightCream,
        [theme.breakpoints.down('sm')]: {
            padding: '2% 0'
        }
    },
    headerSpan: {
        color: theme.palette.primary.main
    },
    header: {
        color: theme.palette.common.darkGrey,
        fontWeight: '700',
        fontSize: '2.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7rem'
        }
    },
    headerWrapper: {
        //marginBottom: '0',
    },
    paperStyle:{
        padding:'2% 5%',
         height:'80%',
         width:'50%',
         [theme.breakpoints.down('sm')]: {
            width:'90%',
        }
    }

   
}));


const GetTutor = () => {
    const classes = useStyles();
    const [step, setStep] = useState(1)
    const [formType, setFormType] = useState('')
    const [error, setError] = React.useState('');
    const [StudentID, setStudentID] = React.useState(null);
    const [TeacherID, setTeacherID] = React.useState({});
    
    const [studentValues, setStudentValues] = useState({
        name: '',
        class: '',
        board: '',
        location: '',
        number:'',
        startTime: '',
        modeOfTution: '',
    });
    const [teacherValues, setTeacherValues] = useState({
        name: '',
        class: '',
        number:'',
        qualification: '',
        location: ''
    });
    
    const studentForm = (event) => {
        setStudentValues({
            ...studentValues,
            [event.target.name]: event.target.value
        })
    }
    const teacherForm = (event) => {
        setTeacherValues({
            ...teacherValues,
            [event.target.name]: event.target.value
        })
    }
    const validateStudent = () => {
        if(!studentValues.name || !studentValues.class || !studentValues.number || !studentValues.location || !studentValues.board || !studentValues.startTime || !studentValues.modeOfTution ){
            setError('Please fill all the details.');
            return false;
        }
        if(studentValues.name.length < 3 && !/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(studentValues.name)){
            setError('Please enter a valid name.');
            return false;
        }
        if(studentValues.number.length !== 10){
            setError('Mobile number should have 10 digits.');
            return false;
        }
        if(isNaN(studentValues.number)){
            setError('Mobile number should have numbers only.');
            return false;
        }
        return true;
    }
    const handleStudentForm = async (e) => {
        e.preventDefault();
        if(validateStudent()){
                axios.post(`/postStudentDetail`, studentValues ).then((res)=>{
                    console.log(res.data.flags)
                    setStudentID(res.data.flags.insertId)
                  }).catch((err)=>{
                    console.log(err)
                  })
                setStep(step + 1);
        }
            
    
}
const validateTeacher = () => {
    if(!teacherValues.name || !teacherValues.class || !teacherValues.number || !teacherValues.location || !teacherValues.qualification ){
        setError('Please fill all the details.');
        return false;
    }
    if(teacherValues.name.length < 3 && !/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(studentValues.name)){
        setError('Please enter a valid name.');
        return false;
    }
    if(teacherValues.number.length !== 10){
        setError('Mobile number should have 10 digits.');
        return false;
    }
    if(isNaN(teacherValues.number)){
        setError('Mobile number should have numbers only.');
        return false;
    }
    return true;
}
const handleTeacherForm = async (e) => {
    e.preventDefault();
    if(validateTeacher()){
        axios.post(`/postTeacherDetail`, teacherValues).then((res)=>{
            setTeacherID(res.data.message.insertId)
          }).catch((err)=>{
            console.log(err)
          })
        setStep(step + 1);
    }
}

    const history = useHistory();
    const setForm=(type)=>{
        setFormType(type)
        setStep(step + 1);
    }
    const nextStep = () => {
        setStep(step + 1);
    }
    const prevStep = () => {
        setStep(step - 1);
    }
    const props = {TeacherID, setTeacherID, StudentID, setStudentID, step, nextStep, prevStep,formType,setForm,setFormType,studentForm,teacherForm,studentValues,teacherValues,error,handleStudentForm,handleTeacherForm, setStep }
    return (
        <>
           
            <Grid container direction='column' className={classes.container}>
            <Grid container item className={classes.headerWrapper} justifyContent="center">
                    
                    <Typography variant="h5" className={classes.header}>
                       Find Best <span className={classes.headerSpan}>Tution</span>
                    </Typography>
                </Grid>
                <Grid container direction='column' justify="center" alignItems="center" style={{margin:'0 auto'}}>
               
                <Paper elevation={step!==4?4:0}className={classes.paperStyle}>
                <Switch {...props} />
                
                </Paper>
                </Grid>
            </Grid>
           
           

        </>

    );
}

const Switch = (props) => {

    switch (props.step) {
        case 1:
            return(
                <Grid item container justifyContent="center" alignItems="center" direction="column" >
                        <Grid item container justify="center">
                        <img src={tutor} alt="banner Image" style={{width:'300px',height:'300px',marginBottom:'5%'}}/>
                        </Grid>
                        <Grid container direction="row" justifyContent="center">
                        <Grid item style={{marginRight:'5%'}}>
                        <Button
                            type="button"
                            color="secondary"
                            variant="contained"
                            onClick={()=>{props.setForm('student')}}
                        >
                       I am Student
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            onClick={()=>{props.setForm('teacher')}}
                        >
                        I am Teacher
                        </Button>
                        </Grid>
                        </Grid>

                    </Grid>
            )
        case 2:
            return ( props.formType==='student'?<Students {...props}/>:<TeacherForm {...props}/>);
        case 3:
            return (<Subjects
                {...props}
            />);
        case 4:
            return(<Demo {...props}/>)
    }
}

// conditional rendering 2 buttons 1Student 2 Teacher     


export default GetTutor;