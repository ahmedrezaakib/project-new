import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';


import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop_Category from './pages/Shop_Category';
import Blog from './pages/Blog';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/vendors/linericon/style.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/themify-icons.css";
import "./assets/css/flaticon.css";
import "./assets/vendors/lightbox/simpleLightbox.css";
import "./assets/vendors/nice-select/css/nice-select.css";
import "./assets/vendors/animate-css/animate.css";
import "./assets/css/responsive.css";

/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';
import Protected from './Admin/protected';


function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });

  return (
<> 
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Shop_Category' element={<Shop_Category/>}/> 
  <Route path='/Blog' element={<Blog/>}/>

  <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Admin route */}
          <Route path= {"/admin/dashboard"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          <Route path= {"/admin/user"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>
           } />
          <Route path="/admin/add-user" element={<Useradd />} />
</Routes>
</>
  );
}

export default App;
