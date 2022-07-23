import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MyBookings() {
  return (
    <div>
      <h1>My Bookings</h1>
      <div className="mybookings">
        <Link to="/bustickets" style={{textDecoration:"none"}}>
          <Button variant="contained" color="success">
            Back
          </Button>
        </Link>
      </div>
      <div className="myBooking-lists">
        <h3>Bus Number:  </h3>
        <h3>Pickup:  </h3>
        <h3>Drop:  </h3>
        <h3>Name:  </h3>
        <h3>Email:   </h3>
        <h3>Number:   </h3>
        <h3>Age:   </h3>
        <h3>Gender:</h3>
        <h3>DOB</h3>
        <h3>Total</h3>
        <h3>Status: Booked</h3>
      </div>

    </div>
  );
}

export default MyBookings;
