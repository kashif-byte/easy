import React from 'react';
import { Typography, Grid, makeStyles,Box ,Button,TextField,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl:{
        minWidth: '100%',
        margin:'2% 0'
      },
      error: {
        color: 'red',
        textAlign: 'center'
    }
}));


const TeacherForm = ({prevStep,error,teacherForm,handleTeacherForm,teacherValues }) => {
  const classes = useStyles();
    return (
        <>
         <Box>
         <Typography variant="body2" className={classes.error}>{error}</Typography>
         <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name="name"
            label="Name"
            type="text"
            required
            fullWidth
            value={teacherValues.name}
            onChange={teacherForm}
          />
           <TextField
            margin="dense"
            variant="outlined"
            name="number"
            label="Contact Number"
            required
            value={teacherValues.number}
            type="text"
            fullWidth
            onChange={teacherForm}
          />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">To Which class you want to teach</InputLabel>
        <Select
         name="class"
         onChange={teacherForm}
          label="Class"
          margin="dense"
          value={teacherValues.class}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1st</MenuItem>
          <MenuItem value={2}>2nd</MenuItem>
          <MenuItem value={3}>3rd</MenuItem>
          <MenuItem value={4}>4rth</MenuItem>
          <MenuItem value={5}>5th</MenuItem>
          <MenuItem value={6}>6th</MenuItem>
          <MenuItem value={7}>7th</MenuItem>
          <MenuItem value={8}>8th</MenuItem>
          <MenuItem value={9}>9th</MenuItem>
          <MenuItem value={10}>10th</MenuItem>
          <MenuItem value={11}>11th</MenuItem>
          <MenuItem value={12}>12th</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="qualification"
        label="Qualification"
        variant="outlined"
        fullWidth
        margin="dense"
        value={teacherValues.qualification}
        onChange={teacherForm}
      />
      <TextField
        name="location"
        label="location"
        variant="outlined"
        fullWidth
        margin="dense"
        style={{marginBottom:'5%'}}
        value={teacherValues.location}
        onChange={teacherForm}
      />
       <Grid item container justify="flex-end" direction="row" >
                        <Grid item style={{marginRight:'5%'}}>
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
                            onClick={handleTeacherForm}
                        >
                        Next
                        </Button>
                        </Grid>

                    </Grid>

        </Box>
            
        </>
    )
}

export default TeacherForm
