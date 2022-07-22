import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <div style={{display: "inlineFlex"}}>
        <h1>Register here</h1>
        <div className="register-login"><Link to="/login"><Button variant="contained" color="success">Login</Button></Link></div>
      </div>
      <div className="register-page">
        <div className="register-fill">
          <h3>Name -</h3>
          <h3 style={{ paddingTop: "40px" }}>Email-Address -</h3>
          <h3 style={{ paddingTop: "39px" }}>Password -</h3>
        </div>
        <div className="register-fill-input">
          <input style={{ paddingTop: "10px" }} />
          <input style={{ paddingTop: "10px", marginTop: "50px" }} />
          <input style={{ paddingTop: "10px", marginTop: "55px" }} />
        </div>
        <div className="register-button">
         <Link to="/bustickets"> <Button variant="contained" color="success">
            Register
          </Button></Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
