import {  useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';

function AllUsers() {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
      axios.get('http://localhost:3001/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        
        });
    }, []);
    
const deleteUser = (id, e) => {
  e.preventDefault()
  axios.delete(`http://localhost:3001/users/${id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
    if (!res.ok) {
      toast.success("User deleted successfully!")
      
    }else {
      toast.success("User deleted failed!")
    }
  })
  
}





 



    return (
      <div className="Users">
      {users.map(user => (
        <p key={user.id}>
          <span>Name: </span>{user.name} {user.lastName}<br />
          <span>Email: </span>{user.email}<br />
          <img src={user.img} alt="" height="150px"
            width="150px" />
            <Button style={{backgroundColor: 'black', color: 'white'}}onClick={(e) => deleteUser(user.id, e)}>Delete</Button>
        </p>
      ))}
      <ToastContainer />
    </div>

    )
    }

export default AllUsers;