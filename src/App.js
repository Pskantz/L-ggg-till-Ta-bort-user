import { Route, Routes } from 'react-router-dom';

import React from 'react';
import AddUser from './components/AddUser';
import MyNavbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllUsers from './components/AllUsers';
import "./components/style.scss"



function App() {
  return (
    <div> 
       <MyNavbar></MyNavbar>
       <Routes>
      <Route path='/' element={<AddUser></AddUser>}></Route>
      <Route path='/all-users' element={<AllUsers></AllUsers>}></Route>
     </Routes>
      </div>
    
  
  
    
   
  );
}

export default App;
