import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

function Bookingheader() {
  return (
    <div>
        <h1>Search for Bus tickets</h1>
        <div className='booking-button'><Link to="/mybookings"style={{textDecoration:"none"}}><Button variant="contained" color="success">My Bookings</Button></Link></div>
        <div className='booking-logout-button'> <Link to="/"style={{textDecoration:"none"}}><Button variant="contained" color="success">Log-Out</Button></Link></div>
    </div>
  )
}

export default Bookingheader