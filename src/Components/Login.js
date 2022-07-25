import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  // let userData = localStorage.getItem("Users");
  // let data = JSON.parse(userData);
  // let foundEmail = data.find((e) => e.Email === Email);
  // let foundPassword = data.find((e) => e.Password === Password);

  const loginInput = (event) => {
    event.preventDefault();
    let userData = localStorage.getItem("Userssssss");
    let data = JSON.parse(userData);
    console.log(data.Email)
    let foundUser = data.find((e) => e.Email===Email );
    console.log(foundUser);
    // let foundPassword = data.find((e) => e.Password === Password);
    if (Email === "" || Password === "") {
      alert("All the fields are mandatory");
      // toast.error("Enter Correct Email");
    }else if(foundUser===undefined){
      alert(" Not available")
    } else if ( foundUser.Password === Password) {
      console.log("email and password got it");
      alert("Login succesful");
      //alert("Please register first");
      navigate("../bustickets", { replace: true });
    }
    //  else if(foundEmail.Email!==Email && foundPassword.Password!==Password){
    else {
    return  alert("Please register first");
     }
    // else{alert("Login succesful");
    // navigate("../bustickets", { replace: true });

    // navigate("/bustickets", { replace: true });
    // }
    // let foundObject = data.find((e) => e.Email === Email),
  };

  return (
    <div>
      <div style={{ display: "inlineFlex" }}>
        <h1>Login here</h1>
        <div className="login-register">
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success">
              Register
            </Button>
          </Link>
        </div>
      </div>

      <div className="login-page">
        <div className="login-fill">
          <h3 style={{ paddingTop: "40px" }}>Email-Address -</h3>
          <h3 style={{ paddingTop: "39px" }}>Password -</h3>
        </div>

        <div className="login-fill-input">
          <input
            style={{ paddingTop: "10px", marginTop: "50px" }}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="password"
            style={{ paddingTop: "10px", marginTop: "53px" }}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-button">
          {/* <Link to="/bustickets" style={{ textDecoration: "none" }}> */}
          <Button variant="contained" color="success" onClick={loginInput}>
            Login
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
