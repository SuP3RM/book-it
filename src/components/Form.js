import React from 'react';
import '../App.css';

import Schedule from './Schedule';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('none');

  const [state, setState] = React.useState({
    options: '',
    type: '',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleRadioChange = event => {
    setValue(event.target.value);
  };

  return (

      <form className={classes.container} noValidate autoComplete="off">
        <h1 className="meeting-event">Meeting/Event Details</h1>
          <div className="meeting-event-options">

            {/* title TextField */}
            <TextField
              id="outlined-helperText"
              label="Title"
              className={classes.textField}
              helperText="Keep Title Short"
              margin="normal"
              variant="outlined"
            />

            {/* Date & time Picker, located in Schedule.js */}
            <Schedule/>

            {/* Estimated Attendance */}
            <FormControl variant="outlined" className={classes.formControl}>
            <NativeSelect
              value={state.attendees}
              onChange={handleChange('attendees')}
              inputProps={{
                name: 'attendees',
                id: 'attendeesNumber-native-helper',
              }}
              >
              <option value="" />
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20+</option>

              </NativeSelect>
            <FormHelperText>Estimated Attendance</FormHelperText>

            {/* Type of Meeting/event options */}
            <NativeSelect
              value={state.type}
              onChange={handleChange('type')}
              inputProps={{
                name: 'type',
                id: 'typeof-meeting-event-native-helper',
              }}
              >
              <option value="" />
              <option value={5}>Faculty</option>
              <option value={10}>Staff</option>
              <option value={15}>Student</option>
              <option value={20}>Student Org</option>
              <option value={25}>Department</option>
              </NativeSelect>
            <FormHelperText>Type of Meeting/Event</FormHelperText>
            </FormControl>

            {/* Require food, drinks, both, or none */}
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Require Food and/or Beverages? If any, please add in additional details what to order and account to charge if applicable.</FormLabel>
              <RadioGroup aria-label="foodOptions" name="foodOptions" value={value} onChange={handleRadioChange} row>
                <FormControlLabel
                  value="none"
                  control={<Radio color="primary" />}
                  label="None"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="food"
                  control={<Radio color="primary" />}
                  label="Food"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="beverages"
                  control={<Radio color="primary" />}
                  label="Beverages"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="both"
                  control={<Radio color="primary" />}
                  label="Both"
                  labelPlacement="top"
                />
              </RadioGroup>
              </FormControl>

              {/* Text area for additional details */}
              <TextareaAutosize className="text-area" rows={15} placeholder="For additional details please mention here..." />
              </div>

              <h1 className="contact-info">Requester Contact Information</h1>
        </form>

  );
}
