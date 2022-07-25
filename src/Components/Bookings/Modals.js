import { Container, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let busArray = [];
const ariaLabel = { "aria-label": "description" };
function Modals(props) {
  const [show, setShow] = useState(false);
  const [ticketval, setticketval] = useState(1);
  const [ticketValid, setticketValid] = useState("");
  const navigate = useNavigate();

  const increment = () => {
    if (ticketval < 5) {
      setticketval(ticketval + 1);
    }
  };

  const decrement = () => {
    if (ticketval > 1) {
      setticketval(ticketval - 1);
    }
  };

  const handleClose = () => {
    props.close();
  };
  const handleShow = () => setShow(true);

  const [names, setnames] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [date, setdate] = useState("");

  const closeModal = () => {
    navigate("/bustickets", { replace: true });
  };

  const bookHandler = (e) => {
    e.preventDefault();
    console.log(props);
    const bookedData = {
      Bus_Number: props.serviceNumber.sno,
      pick_Name: props.serviceNumber.pname,
      drop_Name: props.serviceNumber.dname,
      p_price: props.serviceNumber.pprice,
      tickVal: ticketval,
      Name: names,
      Email: email,
      Number: number,
      Age: age,
      Gender: gender,
      Date: date,
    };

    if (names === "") {
      alert(" enter name");
    } else if (email === "" || !email.includes("@")) {
      alert("email is invalid");
    } else if (number > 9999999999 || number === "") {
      alert("enter valid number");
    } else if (age === "" || age > 80) {
      alert("enter valid age");
    } else if (gender === "") {
      alert("enter gender");
    } else if (date === "") {
      alert("enter date");
    } else {
      toast.success("Bus Tickets are Booked ", { position: "top-center" });

      busArray.push(bookedData);
      const busData = localStorage.setItem(
        "Booked-Person",
        JSON.stringify(busArray)
      );

      // setnames("");
      // setemail("");
      // setnumber("");
      // setage("");
      // setgender("");
      // // setdate("");
      setTimeout(() => {
        props.close();
      }, 1500);
    }

    navigate("../bustickets", { replace: true });
  };
  return (
    <div>
      <Typography
        id="modal-modal-title"
        variant="h4"
        component="h2"
        sx={{ mt: -4 }}
      >
        Book Here
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <Container>
          <div className="no-of-persons">
            <h4>Number of Persons:</h4>
            <div className="inc-dec">
              <button
                style={{ marginTop: "7px", width: "46px", height: "72px" }}
                onClick={decrement}
              >
                <h1>-</h1>
              </button>
              <div
                value={ticketval}
                onChange={(e) => setticketval(e.target.value)}
                style={{ marginTop: "32px" }}
              >
                {ticketval}
              </div>
              <button
                style={{ marginTop: "7px", width: "46px", height: "72px" }}
                onClick={increment}
              >
                <h1>+</h1>
              </button>
            </div>
          </div>
          <div className="input-details">
            <h4>Name</h4>
            <Input
              placeholder="Enter Name"
              className="modalinput"
              type="text"
              value={names}
              onChange={(e) => setnames(e.target.value)}
              required
              inputProps={ariaLabel}
            />
            <h4>Email:</h4>
            <Input
              placeholder="Enter Email"
              className="modalinput"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              inputProps={ariaLabel}
            />
            <h4>Phone Number:</h4>
            <Input
              placeholder="Enter Number"
              className="modalinput"
              type="number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
              inputProps={ariaLabel}
            />
            <h4>Age:</h4>
            <Input
              placeholder="Enter Age"
              className="modalinput"
              type="number"
              value={age}
              onChange={(e) => setage(e.target.value)}
              required
              inputProps={ariaLabel}
            />
            <h4>Gender: </h4>
            <Input
              placeholder="Enter Gender"
              className="modalinput"
              type="text"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
              required
              inputProps={ariaLabel}
            />
            <h4>Date of Journey:</h4>
            <Input
              placeholder="Placeholder"
              type="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              required
              inputProps={ariaLabel}
            />
            <h2>Total:&#8377;{props.serviceNumber.pprice * ticketval}</h2>
          </div>
          <div className="modal-buttons">
            <div>
              <Link to="/bustickets" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    width: "132px",
                    height: "45px",
                    backgroundColor: "green",
                  }}
                  onClick={bookHandler}
                  variant="contained"
                  color="success"
                >
                  Book Now
                </Button>
              </Link>
            </div>
            <div>
              <Button
                 onClick={handleClose}
                style={{
                  width: "132px",
                  height: "45px",
                  backgroundColor: "success",
                }}
                variant="contained"
                color="success"
              >
                <Link to="/bustickets" style={{ textDecoration: "none" }}>
                Close
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Typography>
    </div>
  );
}

export default Modals;
