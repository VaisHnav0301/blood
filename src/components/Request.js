import { Button, Grid, Paper, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Style.css';
const Request = () => {

    const { register, handleSubmit} = useForm();
    // const createCourse=(val) => {
    //     alert('form submitted');
    //     axios.post("http://localhost:5000/course/create",val).then((res)=>{
    //       alert(`Course Successfully Created`);
    //     })
      //}
      
  
      const paperStyle={padding:20,height:'40vh',width:280,margin:"20p"}
  return (
    <div className='grp'>
       <Stack
       
      
      component="form"
      sx={{
        marginTop:'10px',
        marginLeft:'500px',
        width: '25ch',
      }}
      spacing={5}
      noValidate
      autoComplete="off"
    >
    
    <Grid className='App'>
       <Paper elevation={105} style={paperStyle} className='col'>
       <h2 className='vs'>REQUEST FORM</h2>
      <TextField 
      name='userId'
      {...register('userId')}
        label = "Name"
        variant="standard"
      />
      <br></br>
      <br></br>
      

      <TextField 
        name='courseDesc'
        {...register('courseDesc')}
        label ="Age"
        variant="standard"
      />
      <br></br>
      <br></br>


      <TextField
        name='courseDuration'
        {...register('courseDuration')}
        variant="standard"
        label ="Email"
      />
      <br></br>
      <br></br>

      <TextField
        name='courseDuration'
        {...register('courseDuration')}
        variant="standard"
        label ="Number"   
      />
      <br></br>
      <br></br>

      <TextField
        name='courseDuration'
        {...register('courseDuration')}
        variant="standard"
        label ="Blood Type Requested"   
      />



      <br></br>
      <br></br>
      <br></br>

      
      <select className='vd'>
        <option value="Select" aria-setsize={25}>Category</option>
        <option value="Donor">Donor</option>
        <option value="Reciever">Reciever</option>
        <br></br>
        <br></br>
      </select>
    
    <br></br>
    <br></br>
    <br></br>
      
      <Button variant='contained'>Submit</Button>
      </Paper>
      </Grid>
    </Stack>
     
    </div>
  )
}

export default Request

