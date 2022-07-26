import { Button } from '@mui/material'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../Homepage/Homepage.css'
import './Bookingheader.css'
function Bookingheader() {
  const navigate=useNavigate()
  const logoutHandler=()=>{
    localStorage.removeItem('currentUser')
    navigate('/',{replace:true})
  }
  return (
    <div>
        <h1>Search for Bus tickets</h1>
        <div className='booking-button'><Link to="/mybookings"style={{textDecoration:"none"}}><Button variant="contained" color="success">My Bookings</Button></Link></div>
        <div className='booking-logout-button'> <Button variant="contained" color="success" onClick={logoutHandler}>Log-Out</Button></div>
    </div>
  )
}

export default Bookingheader