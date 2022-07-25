import React, { useState } from "react";
import Input from "@mui/material/Input";
import { Box, Button, Modal, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiFillStar } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Modals from "./Modals";
// import Arrow from '../Components/right-arrow-icon-ico-11562931718i8rqgsef9d.png'
const ariaLabel = { "aria-label": "description" };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Tickets() {
  const [passwordInput, setpasswordInput] = useState("");
  const [fromInput, setfromInput] = useState("");
  const [foundbuses, setfoundbuses] = useState();
  const [busNumber, setbusNumber] = useState();
  const [openModal, setopenModal] = useState(false);
  const [notFound, setnotFound] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeModal = () => {
    setopenModal(false);
  };

  const busArray = [
    {
      Service_Number: 778545,
      pick: "Hyderabad",
      drop: "Visakhapatnam",
      picktime: "6:50 AM",
      droptime: "1:00 PM",
      price: 965,
      rating: 4.5,
      seats: 11,
    },
    {
      Service_Number: 549863,
      pick: "Hyderabad",
      drop: "Visakhapatnam",
      picktime: "4:00 PM",
      droptime: "1:30 Am",
      price: 565,
      rating: 4.2,
      seats: 22,
    },
    {
      Service_Number: 112665,
      pick: "Visakhapatnam",
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
      drop: "Hyderabad",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      price: 570,
      rating: 3.7,
      seats: 23,
    },
    {
      Service_Number: 521165,
      pick: "Mumbai",
      drop: "Hyderabad",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      price: 610,
      rating: 4.2,
      seats: 13,
    },
    {
      Service_Number: 521154,
      pick: "Mumbai",
      drop: "Hyderabad",
      picktime: "5:30 AM",
      droptime: "12:00 PM",
      price: 1200,
      rating: 4.2,
      seats: 30,
    },

    {
      Service_Number: 521641,
      pick: "Visakhapatnam",
      drop: "Vijayawada",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      price: 587,
      rating: 4.2,
      seats: 22,
    },
    {
      Service_Number: 521852,
      pick: "Visakhapatnam",
      drop: "Vijayawada",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 587,
      rating: 4.5,
      seats: 23,
    },
    {
      Service_Number: 521852,
      pick: "Vijayawada",
      drop: "Visakhapatnam",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 587,
      rating: 4.5,
      seats: 23,
    },
    {
      Service_Number: 521852,
      pick: "Vijayawada",
      drop: "Bangalore",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 587,
      rating: 4.5,
      seats: 23,
    },
    {
      Service_Number: 521852,
      pick: "Mumbai",
      drop: "Vijayawada",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 585,
      rating: 3.5,
      seats: 20,
    },
    {
      Service_Number: 521852,
      pick: "Vijayawada",
      drop: "Mumbai",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 585,
      rating: 3.5,
      seats: 20,
    },
    {
      Service_Number: 521852,
      pick: "Bangalore",
      drop: "Vijayawada",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 585,
      rating: 3.5,
      seats: 20,
    },
    {
      Service_Number: 521852,
      pick: "Hyderabad",
      drop: "Vijayawada",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 585,
      rating: 3.5,
      seats: 20,
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
      rating: 4.3,
      seats: 5,
    },
    {
      Service_Number: 423658,
      pick: "Bangalore",
      drop: "Visakhapatnam",
      picktime: "6:00 PM",
      droptime: "1:00 AM",
      price: 654,
      rating: 3.5,
      seats: 23,
    },
    {
      Service_Number: 646464,
      pick: "Bangalore",
      drop: "Visakhapatnam",
      picktime: "9:00 PM",
      droptime: "12:00 AM",
      price: 354,
      rating: 3.8,
      seats: 22,
    },
    {
      Service_Number: 131651,
      pick: "Visakhapatnam",
      drop: "Bangalore",
      picktime: "3:00 AM",
      droptime: "9:00 PM",
      price: 850,
      rating: 3.8,
      seats: 15,
    },
    {
      Service_Number: 346589,
      pick: "Visakhapatnam",
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
      rating: 4.5,
      seats: 11,
    },
    {
      Service_Number: 412593,
      pick: "Visakhapatnam",
      drop: "Mumbai",
      picktime: "3:00 AM",
      droptime: "12:30 PM",
      price: 684,
      rating: 4.5,
      seats: 11,
    },
    {
      Service_Number: 369851,
      pick: "Mumbai",
      drop: "Bangalore",
      picktime: "2:00 AM",
      droptime: "1:00 Am",
      price: 958,
      rating: 4.4,
      seats: 8,
    },
    {
      Service_Number: 369851,
      pick: "Bangalore",
      drop: "Mumbai",
      picktime: "2:00 AM",
      droptime: "1:00 Am",
      price: 958,
      rating: 4.4,
      seats: 8,
    },
    {
      Service_Number: 3675778,
      pick: "Mumbai",
      drop: "Bangalore",
      picktime: "3:00 AM",
      droptime: "2:00 Am",
      price: 1000,
      rating: 4.5,
      seats: 18,
    },
    {
      Service_Number: 369851,
      pick: "Mumbai",
      drop: "Visakhapatnam",
      picktime: "2:30 AM",
      droptime: "12:00 Am",
      price: 958,
      rating: 4.5,
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
    // if(foundbuses==undefined){
    // setnotFound(true)
    // }else{
    setfoundbuses(foundbuses);
    // }
    // // {foundbuses.pick===fromInput?setfoundbuses(foundbuses):setnotFound(true)}
  };
  // console.log(foundbuses);

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
          <option className="none">FROM</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Vijayawada">Vijayawada</option>
        </Form.Select>
        <h2>TO</h2>
        {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}
        <Form.Select
          className="from-input-box"
          aria-label="Default select example"
          onChange={selectTo}
        >
          <option className="none">TO</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Vijayawada">Vijayawada</option>
        </Form.Select>
        <div style={{ top: "12px", position: "relative" }}>
          <Button variant="contained" color="success" onClick={searchHandler}>
            Search
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* {foundbuses !== undefined && */}
        {foundbuses ? (
          foundbuses !== undefined &&
          foundbuses.map((event) => (
            <Container key={event.Service_Number} className="buses">
              <div className="left-side">
                <h2>Bus Number:{event.Service_Number}</h2>
                <h2>Pick Location:{event.pick}</h2>
                <h2>Pick-Up:{event.picktime}</h2>
              </div>
              <div className="middle-side">
                <h2>Seats-Available:{event.seats}</h2>
                <img
                  className="arrow"
                  src="right-arrow-icon-ico-11562931718i8rqgsef9d.png"
                />
              </div>
              <div className="right-side">
                <h2>Ticket Price:&#8377;{event.price}</h2>
                <h2>Drop Location:{event.drop}</h2>
                <h2>Drop:{event.droptime}</h2>
              </div>
              <div className="last-right-side">
                <div className="rating" variant="contained" color="success">
                  <div className="rating-icon">
                    <AiFillStar
                      style={{
                        width: "43px",
                        position: "absolute",
                        height: "51px",
                        top: "15px",
                        right: "28px",
                      }}
                    />
                    <h2>{event.rating}</h2>
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    handleOpen();
                    setopenModal(true);
                    setbusNumber({
                      sno: event.Service_Number,
                      pname: event.pick,
                      dname: event.drop,
                      pprice: event.price,
                    });
                  }}
                >
                  Book
                </Button>
              </div>
            </Container>
          ))
        ) : (
          <h1>WELCOME TO BUS TRAVELS</h1>
        )}
      </div>

      {notFound ? <div> Buses not available</div> : <div></div>}

      {openModal && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Modals serviceNumber={busNumber} close={closeModal} />
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default Tickets;
