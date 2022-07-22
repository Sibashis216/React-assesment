import { Button } from '@mui/material'
import React from 'react'

function Bookingheader() {
  return (
    <div>
        <h2>Search for Bus tickets</h2>
        <div className='booking-button'> <Button variant="contained" color="success">My Bookings</Button></div>
        <div className='booking-logout-button'> <Button variant="contained" color="success">Log-Out</Button></div>
    </div>
  )
}

export default Bookingheader