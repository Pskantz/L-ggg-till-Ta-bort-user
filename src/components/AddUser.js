import Button from '@mui/material/Button';
import React from 'react';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';



function AddUser() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [img, setImg] = useState('');
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setUsers(res.data));
  }, []);
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    const res = await fetch('http://localhost:3001/users', {
     
     
  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)

    
    
    

      
  
    })
    
  if (res.ok) {
    toast.success("User added successfully!")
    setLastName('')
    setName('')
    setMail('')
    setImg('')
  }else{
    toast.error("Failed to add the user!")
  }
  }
// ------------------------------------------------------
//  const randomNumber = Math.floor(Math.random() * 1000) + 1;

const newUser = {
  
    id: users.lenght +1,
   name: name,
   lastName: lastName,
   email: mail,
    img: img
  

 }
 
   
  
    return (
      <div className="AddUser">
        <h1>Add Your User</h1>
        <form className='form' onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Name" value={name}  variant="outlined"
        onChange={(e) => setName(e.target.value) } />
        <br></br>
        <TextField id="outlined-basic" label="Last name" value={lastName}variant="outlined" 
        onChange={(e) => setLastName(e.target.value)}/>
        <br></br>
        <TextField id="outlined-basic" label="Mail" value={mail} variant="outlined" 
        onChange={(e) => setMail(e.target.value)}/>
        <br></br>
        <TextField id="outlined-basic" label="Img-URL" value={img} variant="outlined" 
        onChange={(e) => setImg(e.target.value)}/>
        <br></br>
        <Button variant="contained" style={{ backgroundColor: 'green'}}color="primary" type="submit">Submit</Button>
       
        </form>
        <ToastContainer />
             



      </div>
    );
  }export default AddUser;