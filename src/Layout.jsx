import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {PriceHeader, Header, Footer} from './Components';
import { AuthProvider } from './Shared/Hooks/Auth'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  const [ isAdmin, setIsAdmin ] = useState(false)
  const baseurl = import.meta.env.VITE_BACKEND_ROUTE + "login/check";
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt')
    if (jwtToken) {
      axios.get(
        baseurl,
        { headers: { Authorization: `jwt ${jwtToken}` } }
      ).then( (response) => {
        if (response.data.message == 'Loggedin') {
          setIsAdmin(true)
      }
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('jwt');
        setIsAdmin(false);
      } else {
        console.error('Error:', error);
      }
    })
    }
  }, [])
    
    return (
      <>
    <AuthProvider value={{isAdmin, setIsAdmin}}>
      <ToastContainer />
      <PriceHeader />
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
    </>
  )
}

export default Layout