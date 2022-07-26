import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Homepage/Homepage.css'
import './MyBooking.css'

function MyBookings() {
  const navigate = useNavigate();
  const booked = localStorage.getItem("Booked-Person");
  const BookedBusses = JSON.parse(booked);

  const alluser=localStorage.getItem("currentUser")
  const singleuser= JSON.parse(alluser) 
  console.log(singleuser)
  const foundPerson= BookedBusses.filter((e)=>e.Email===singleuser)
  console.log(foundPerson.Email)

  // if(singleuser===foundPerson){
    // console.log(BookedBusses);
    // console.log(foundPerson);
    // console.log(singleuser);
  //   return BookedBusses
  // }
  return (
    <div className="gradient">
      <h1>My Bookings</h1>
      <div className="mybookings">
        <Link to="/bustickets" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            Back
          </Button>
        </Link>
      </div>

      {/* {foundPerson.Email===singleuser.Email?foundPerson.map((e) => { */}
      {BookedBusses?.map((e) => {
        // console.log(e);
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
    //   }):singleuser.map((event)=>{
    //     return (
    //       <div className="myBooking-lists">
    //         <h3>Bus Number:{event.Bus_Number} </h3>
    //         <h3>Pickup: {event.pick_Name}</h3>
    //         <h3>Drop:{event.drop_Name} </h3>
    //         <h3>Name: {event.Name}</h3>
    //         <h3>Email:{event.Email} </h3>
    //         <h3>Number: {event.Number}</h3>
    //         <h3>Age:{event.Age} </h3>
    //         <h3>Gender:{event.Gender}</h3>
    //         <h3>DOB:{event.Date}</h3>
    //         <h3>Total:&#8377;{event.tickVal * event.p_price}</h3>
    //         <h3>Status: Booked</h3>
    //       </div>
    //  ) })}
    // </div>
  // );
}
)
}</div>)}
{/* </div> */}

export default MyBookings;
