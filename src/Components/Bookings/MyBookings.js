import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MyBookings() {
  const navigate = useNavigate();
  const booked = localStorage.getItem("Booked-Person");
  const BookedBusses = JSON.parse(booked);
  return (
    <div>
      <h1>My Bookings</h1>
      <div className="mybookings">
        <Link to="/bustickets" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            Back
          </Button>
        </Link>
      </div>

      {BookedBusses?.map((e) => {
        console.log(e);
        return (
          <div className="myBooking-lists">
            <h3>Bus Number:{e.Bus_Number} </h3>
            <h3>Pickup: {e.pick_Name}</h3>
            <h3>Drop:{e.drop_Name} </h3>
            <h3>Name: {e.Name}</h3>
            <h3>Email:{e.Email} </h3>
            <h3>Number: {e.Number}</h3>
            <h3>Age:{e.Age} </h3>
            <h3>Gender:{e.Gender}</h3>
            <h3>DOB:{e.Date}</h3>
            <h3>Total:&#8377;{e.tickVal * e.p_price}</h3>
            <h3>Status: Booked</h3>
          </div>
        );
      })}
    </div>
  );
}

export default MyBookings;
