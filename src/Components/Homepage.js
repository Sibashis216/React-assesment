import React from "react";
import "../Styles/Header.css";
import Button from "@mui/material/Button";
import Register from "./Register";
import { Link } from "react-router-dom";
import BackgroundImage from "../Components/generic_banner_Ind.png";
// import "./App.css";
function Homepage() {
  return (
    <div>
      <img className="backgrnd-img" src={BackgroundImage} />
      <div className="header-Css">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="success">
            Login
          </Button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button variant="contained">Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
