import React from "react";
import "../Homepage/Homepage.css";
import Button from "@mui/material/Button";
import Register from "../Credentials/Register";
import { Link } from "react-router-dom";
// import BackgroundImage from "../Components/Assets/generic_banner_Ind.png";
// import "./App.css";
function Homepage() {
  return (
    <div>
      <img className="backgrnd-img" src="generic_banner_Ind.png" />
      <div className="header-Css">
      <img className="logo-css" src='222-2228037_logos-for-bus-logo-best-transports-en-commun-logo.png'/>
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
