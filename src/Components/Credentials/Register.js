import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";
import "../Homepage/Homepage.css";
import "./Register.css";

let arr = [];
function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ValidEmail, setValidEmail] = useState(false);
  const navigate = useNavigate();

  const Register = (event) => {
    // console.log(Name, Email, Password);
    event.preventDefault();
    // let arr = [];

    if (Name === "" || Email === "" || Password === "") {
      alert("All the fields are mandatory");
    } else if (
      !Email.includes("@") ||
      (!Email.includes(".com") && !Email.includes(".COM"))
    ) {
      alert("Invalid Email");
    } else {
      const userArray = {
        Name: Name,
        Password: Password,
        Email: Email,
      };
      arr.push(userArray);
      setName("");
      setEmail("");
      setPassword("");
      setValidEmail(true);
      localStorage.setItem("Userssssss", JSON.stringify(arr));
      alert("Saved successfully");
      console.log(arr);
      navigate("../login", { replace: true });
      //  let userrrr= arr.push(Name, Email, Password);
      // localStorage.setItem("Usersss", JSON.stringify(userrrr));
      // console.log(userrrr);
      // alert("Saved successfully");
      // if (ValidEmail) {
      // localStorage.setItem("Userssssss", JSON.stringify(arr));
      // console.log(arr);
      // alert("Saved successfully");
      //  }
      // navigate("../login", { replace: true });
      // localStorage.setItem("Userssssss", JSON.stringify(arr));
    }
  };

  // useEffect(() => {
  // if (ValidEmail) {
  //   localStorage.setItem("Userssssss", JSON.stringify(arr));
  //   console.log(arr);
  //   alert("Saved successfully");
  //   navigate("../login", { replace: true });
  // }
  // }, [arr])

  return (
    <div id="#grad2" className="gradient-register">
      <div style={{ display: "inlineFlex" }}>
        <h1>Register here</h1>
        <div className="register-login">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success">
              Login
            </Button>
          </Link>
        </div>
      </div>
      <form>
        <div className="register-page">
          <div className="register-fill">
            <h3>Name -</h3>
            <h3 style={{ paddingTop: "40px" }}>Email-Address -</h3>
            <h3 style={{ paddingTop: "39px" }}>Password -</h3>
          </div>
          <div className="register-fill-input">
            <input
              placeholder="Enter Name"
              style={{border: "2px solid", paddingTop: "10px" }}
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Enter email"
              style={{border: "2px solid", paddingTop: "10px", marginTop: "50px" }}
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
              placeholder="Enter Password"
              style={{ paddingTop: "10px", marginTop: "55px" }}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            /> */}

            <Form.Control
              className="frminput"
              type="password"
              style={{border: "2px solid", paddingTop: "10px", marginTop: "55px" }}
              // value={password}
              // onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password "
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="register-button">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="success" onClick={Register}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
