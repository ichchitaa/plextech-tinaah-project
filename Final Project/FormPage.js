import './FormPage.css';
import { FormControl, InputLabel, MenuItem, Rating, Select, TextField, Typography, Box, Slider, Button } from '@mui/material';
import { useState } from 'react';

function FormPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dininghall, setDinininghall] = useState("Cafe 3")
  const [open, setOpen] = useState(false);
  const [tasterating, setTasteRating] = useState(3);
  const [visualrating, setVisualRating] = useState(3);
  const [nutritionrating, setNutionRating] = useState(3);
  const [watingTime, setWaitingTime] = useState(0);
  const handleChange = (event) => {
    setDinininghall(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  function valuetext(value) {
  return `${value}°C`;
}
  const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
];

  return (
    <div className="App">
      <div className="header">
        <p1>FORM PAGE</p1>
      </div>

      <div className="body">
          <div className="form">
          <div className = "form-group">

            <div className='element'>
              <TextField style = {{width: "300px"}} id="outlined-basic" label="FirstName" variant="outlined" value = {firstName} onChange = {(event, value) => setFirstName(value)}/>
            </div>

            <div className='element'>
              <TextField style = {{width: "300px"}} id="outlined-basic" label="LastName" variant="outlined" value = {lastName} onChange = {(event, value) => setLastName(value)}/>
            </div>

            <div className='element'>
              <TextField style = {{width: "300px"}} id="outlined-basic" label="Email Adress" variant="outlined" value = {email} onChange = {(event, value) => setEmail(value)}/>
            </div>

            <div className='element'>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-simple-select-label">Dining Hall</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dininghall}
                label="Dining Hall"
                onChange={handleChange}
                // open={open}
                // onClose={handleClose}
                // onOpen={handleOpen}
              >
                <MenuItem value={10}>Cafe 3</MenuItem>
                <MenuItem value={20}>Crossroads</MenuItem>
                <MenuItem value={30}>Foothill</MenuItem>
                <MenuItem value={40}>Clark Kerr</MenuItem>
              </Select>
              </FormControl>
              </div>
          </div>
          
            <Typography variant="h6">Rating</Typography>
            <div className='element'>
              <Typography component="legend">Taste</Typography>
              <Rating
              name="simple-controlled"
              value={tasterating}
              size = "large"
              onChange={(event, newValue) => {
                setTasteRating(newValue);
                
              }}
              />  
            </div>
              
              <div className='element'>
              <Typography component="legend">Visual</Typography>
              <Rating
              name="simple-controlled"
              value={visualrating}
              size = "large"
              onChange={(event, newValue) => {
                setVisualRating(newValue);
                
              }}
              />  
              </div>

              <div className='element'>
              <Typography component="legend">Nutrition</Typography>
              <Rating
              name="simple-controlled"
              value={nutritionrating}
              size = "large"
              onChange={(event, newValue) => {
                setNutionRating(newValue);
                
              }}
              />  
              </div>
            </div>
          
              <div className='element'>
                <TextField
                  id="filled-multiline-static"
                  label="Review(optional)"
                  multiline
                  rows={4}
                  
                  variant="filled"
                  style = {{width: "300px"}}
                />
              </div>

              <div className='element'>
              <Box sx={{ width: 300 }}>
              <Slider
              aria-label="Custom marks"
              defaultValue={20}
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              value = {watingTime}
              onChange = {(event, newValue) => {setWaitingTime(newValue)}}
              marks={marks}
              min = {0}
              max = {50}
            />
            </Box>
            </div>

            <div className='element'>
              <Button variant="contained" color="primary" onClick = {() => console.log("submitted")}>
              Submit
              </Button>
            </div>
      </div> 
    </div>
  );
}

export default FormPage;
