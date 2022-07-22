import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div style={{ display: "inlineFlex" }}>
        <h1>Login here</h1>
        <div className="login-register"><Link to="/register"><Button variant="contained" color="success">Register</Button></Link>
        </div>
      </div>


      <div className="login-page">
        <div className="login-fill">
          <h3 style={{ paddingTop: "40px" }}>Email-Address -</h3>
          <h3 style={{ paddingTop: "39px" }}>Password -</h3>
        </div>

        <div className="login-fill-input">
          <input style={{ paddingTop: "10px", marginTop: "50px" }} />
          <input style={{ paddingTop: "10px", marginTop: "53px" }} />
        </div>

        <div className="login-button">
          <Button variant="contained" color="success">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;





