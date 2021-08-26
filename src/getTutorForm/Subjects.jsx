import React, { useState} from 'react'
import { useHistory } from 'react-router';
import { Typography, Grid, Box, Button, Checkbox, FormControlLabel, FormControl } from '@material-ui/core';
import axios from 'axios'
// const baseURL = 'http://localhost:8000'
const Subjects = ({ StudentID,nextStep, TeacherID, formType, prevStep , setStep, step}) => {
    let history = useHistory()
    const [subject, setSubject] = useState({
        maths: false,
        physics: false,
        hindi: false,
        bio: false,
        economics: false,
        sst: false,
        civics: false,
        history: false,
        account: false,
        business: false,
        chemistry: false,
        english: false
    })
    const handleSubject = (event) => {
        setSubject({
            ...subject,
            [event.target.name]: event.target.value ? false : true
        })
    }
    const submit = () => {
        let str = ""
        for (const key in subject) {
            if (subject[key]) {
                str = str + `${key},`
                str.concat(key)
            }
        }
        let newStr = str.substring(0, str.length - 1);
        if (formType === 'student') {
            const values = { id : StudentID, subject: newStr }
            console.log(values)
            axios.post(`/postStudentSubject`, values).then((res) => {
                setStep(step+1)
            }).catch((err) => {
               history.push('/')
            })
        }
        else if (formType === 'teacher') {
            const values = { id :TeacherID, subject: newStr }
            axios.post(`/postTeacherSubject`, values).then((res) => {
                setStep(step+1)
            }).catch((err) => {
                history.push('/')
            })
        }
        axios.post()
    }
    return (
        <>
            <Box>
                <Typography variant="body1">
                    Choose Subject
                </Typography>
                <Grid container style={{ marginBottom: '2%' }}>
                    <Grid item md={6}>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="maths" onChange={handleSubject} />} label='Mathematics' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="bio" onChange={handleSubject} />} label='Biology' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="physics" onChange={handleSubject} />} label='Physics' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="hindi" onChange={handleSubject} />} label='Hindi' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="economics" onChange={handleSubject} />} label='Economics' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="sst" onChange={handleSubject} />} label='Social Science' />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="civics" onChange={handleSubject} />} label='Civics' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="history" onChange={handleSubject} />} label='History' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="business" onChange={handleSubject} />} label='Business Studies' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="account" onChange={handleSubject} />} label='Account' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="chemistry" onChange={handleSubject} />} label='Chemistry' />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <FormControlLabel control={<Checkbox name="english" onChange={handleSubject} />} label='English' />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify="flex-end" direction="row" >
                    <Grid item style={{ marginRight: '5%' }}>
                        <Button
                            type="button"
                            color="secondary"
                            variant="contained"
                            onClick={prevStep}
                        >
                            Back
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            onClick={submit}
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>

            </Box>

        </>
    )
}

export default Subjects
