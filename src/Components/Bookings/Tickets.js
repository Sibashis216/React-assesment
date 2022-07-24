import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Form } from "react-bootstrap";
const ariaLabel = { "aria-label": "description" };
function Tickets() {
  const [passwordInput, setpasswordInput] = useState("");
  const [fromInput, setfromInput] = useState("");
  const [foundbuses, setfoundbuses] = useState();

  const busArray = [
    {
      Service_Number: 778545,
      pick: "Hyderabad",
      drop: "Visakhaptnam",
      picktime: "6:50 AM",
      droptime: "1:00 PM",
      price: 965,
      rating: 4.5,
      seats: 11,
    },
    {
      Service_Number: 549863,
      pick: "Hyderabad",
      drop: "Visakhaptnam",
      picktime: "4:00 PM",
      droptime: "1:30 Am",
      price: 565,
      rating: 4.0,
      seats: 22,
    },
    {
      Service_Number: 112665,
      pick: "Visakhaptnam",
      drop: "Hyderabad",
      picktime: "12:00 PM",
      droptime: "6:00 AM",
      price: 700,
      rating: 4.2,
      seats: 3,
    },
    {
      Service_Number: 521785,
      pick: "Vijayawada",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      drop: "Hyderabad",
      price: 570,
      rating: 3.7,
      seats: 23,
    },
    {
      Service_Number: 521165,
      pick: "Mumbai",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      drop: "Hyderabad",
      price: 610,
      rating: 4.2,
      seats: 13,
    },
    {
      Service_Number: 521154,
      pick: "Mumbai",
      picktime: "5:30 AM",
      droptime: "12:00 PM",
      drop: "Hyderabad",
      price: 1200,
      rating: 4.2,
      seats: 30,
    },

    {
      Service_Number: 521641,
      pick: "Visakhaptnam",
      drop: "Vijayawada",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      price: 587,
      rating: 4.2,
      seats: 22,
    },
    {
      Service_Number: 521852,
      pick: "Visakhaptnam",
      drop: "Vijayawada",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 587,
      rating: 4.5,
      seats: 23,
    },
    {
      Service_Number: 521741,
      pick: "Bangalore",
      drop: "Hyderabad",
      picktime: "4:50 AM",
      droptime: "5:45 PM",
      price: 587,
      rating: 3.8,
      seats: 13,
    },
    {
      Service_Number: 521567,
      pick: "Bangalore",
      drop: "Hyderabad",
      picktime: "4:50 AM",
      droptime: "6:00 PM",
      price: 587,
      rating: 4.2,
      seats: 15,
    },
    {
      Service_Number: 425125,
      pick: "Hyderabad",
      drop: "Bangalore",
      picktime: "12:00 Pm",
      droptime: "12:45 AM",
      price: 844,
      rating: 4.0,
      seats: 5,
    },
    {
      Service_Number: 423658,
      pick: "Bangalore",
      drop: "Visakhaptnam",
      picktime: "6:00 PM",
      droptime: "1:00 AM",
      price: 654,
      rating: 3.5,
      seats: 23,
    },
    {
      Service_Number: 646464,
      pick: "Bangalore",
      drop: "Visakhaptnam",
      picktime: "9:00 PM",
      droptime: "12:00 AM",
      price: 354,
      rating: 3.8,
      seats: 22,
    },
    {
      Service_Number: 131651,
      pick: "Visakhaptnam",
      drop: "Bangalore",
      picktime: "3:00 AM",
      droptime: "9:00 PM",
      price: 850,
      rating: 3.8,
      seats: 15,
    },
    {
      Service_Number: 346589,
      pick: "Visakhaptnam",
      drop: "Bangalore",
      picktime: "6:00 AM",
      droptime: "11:45 PM",
      price: 650,
      rating: 3.5,
      seats: 14,
    },
    {
      Service_Number: 412593,
      pick: "Hyderabad",
      drop: "Mumbai",
      picktime: "3:00 AM",
      droptime: "12:30 PM",
      price: 684,
      rating: 4.0,
      seats: 11,
    },
    {
      Service_Number: 369851,
      pick: "Mumbai",
      drop: "Bangalore",
      picktime: "2:00 AM",
      droptime: "1:00 Am",
      price: 958,
      rating: 4.0,
      seats: 8,
    },
    {
      Service_Number: 369851,
      pick: "Mumbai",
      drop: "Visakhaptnam",
      picktime: "2:30 AM",
      droptime: "12:00 Am",
      price: 958,
      rating: 4.0,
      seats: 8,
    },
  ];

  localStorage.setItem("busArray", JSON.stringify(busArray));

  const busData = localStorage.getItem("busArray");
  const dataBus = JSON.parse(busData);
  // console.log(dataBus);

  const selectTo = (e) => {
    setpasswordInput(e.target.value);
  };
  const selectFrom = (e) => {
    setfromInput(e.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const foundbuses = dataBus.filter(
      (e) => e.pick === fromInput && e.drop === passwordInput
    );
    console.log(foundbuses);
    setfoundbuses(foundbuses);
  };

  return (
    <div>
      <div className="search-boxes">
        <h2 style={{ marginLeft: "25px" }}>FROM</h2>
        {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}
        <Form.Select
          className="from-input-box"
          aria-label="Default select example"
          onChange={selectFrom}
        >
          <option>From</option>
          <option value="1">Hyderabad</option>
          <option value="2">Bhubaneshwar</option>
          <option value="3">Mumbai</option>
          <option value="4">Delhi</option>
          <option value="5">Kolkata</option>
          <option value="6">Chennai</option>
          <option value="7">Indore</option>
        </Form.Select>
        <h2>TO</h2>
        {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}
        <Form.Select
          className="from-input-box"
          aria-label="Default select example"
          onChange={selectTo}
        >
          <option>To</option>
          <option value="1">Hyderabad</option>
          <option value="2">Bhubaneshwar</option>
          <option value="3">Mumbai</option>
          <option value="4">Delhi</option>
          <option value="5">Kolkata</option>
          <option value="6">Chennai</option>
          <option value="7">Indore</option>
        </Form.Select>
        <div style={{ top: "12px", position: "relative" }}>
          <Button variant="contained" color="success" onClick={searchHandler}>
            Search
          </Button>
        </div>
      </div>

      {/* {foundbuses !== undefined &&
          foundbuses.map((event) => ( */}
      <div className="buses">
        <div className="left-side">
          <h2>Bus Number:</h2>
          <h2>Pick Location:</h2>
          <h2>Pick-Up:</h2>
        </div>
        <div className="left-side">
          <h2>Seats-Available:</h2>
          <img src=""></img>
        </div>
        <div className="left-side">
          <h2>Bus Number:</h2>
          <h2>Pick Location:</h2>
          <h2>Pick-Up:</h2>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Tickets;
