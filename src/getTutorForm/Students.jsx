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


const StudentForm = ({prevStep,studentForm,error,studentValues,handleStudentForm, setStudent}) => {
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
            value={studentValues.name}
            required
            fullWidth
            onChange={studentForm}
          />
           <TextField
            margin="dense"
            variant="outlined"
            name="number"
            label="Contact Number"
            required
            value={studentValues.number}
            type="text"
            fullWidth
            onChange={studentForm}
          />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
        <Select
         // value={age}
         // onChange={handleChange}
          label="Class"
          name="class"
          margin="dense"
          value={studentValues.class}
          onChange={studentForm}
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
          <MenuItem value={"JEE"}>JEE</MenuItem>
          <MenuItem value={"NEET"}>NEET</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Board</InputLabel>
        <Select
          margin="dense"
          name="board"
          onChange={studentForm}
          value={studentValues.board}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"cbse"}>CBSE</MenuItem>
          <MenuItem value={"icse"}>ICSE</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="location"
        variant="outlined"
        fullWidth
        margin="dense"
        name="location"
        value={studentValues.location}
        onChange={studentForm}
      />
       <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Prefered Start tution time</InputLabel>
        <Select
        name="startTime"
         onChange={studentForm}
          margin="dense"
          value={studentValues.startTime}
        >
          <MenuItem value="" name="startTime">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Immidiate'}>Immidiate</MenuItem>
          <MenuItem value={"Not decided"}>Not decided</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl} name="modeOfTution">
        <InputLabel id="demo-simple-select-outlined-label">Mode of Tution</InputLabel>
        <Select
         name="modeOfTution"
         onChange={studentForm}
          margin="dense"
          value={studentValues.modeOfTution}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Online"}>Online</MenuItem>
          <MenuItem value={"At tutor's home"}>At tutor's home</MenuItem>
          <MenuItem value={"At student's home"}>At student's home</MenuItem>
        </Select>
      </FormControl>
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
                            onClick={handleStudentForm}
                        >
                        Next
                        </Button>
                        </Grid>

                    </Grid>

        </Box>
            
        </>
    )
}

export default StudentForm
