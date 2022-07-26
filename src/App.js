import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Register from "./Components/Credentials/Register";
import Login from "./Components/Credentials/Login";
import BusTickets from "./Components/Bookings/BusTickets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLogo from "./Components/Homepage/HomepageLogo";
import MyBookings from "./Components/Bookings/MyBookings";
import { useEffect, useState } from "react";

function App() {
  const [loggedIn,setLoggedIn]=useState(false)
  const user=JSON.parse(localStorage.getItem('currentUser'))
  useEffect(() => {
    console.log(user)
    if (user){
      setLoggedIn(true)
    }
  }, [user])

  return (
    <div className="App">
      {/* <Homepage/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <BusTickets/> */}
      {/* <MyBookings/> */}

      <BrowserRouter>
        <HomepageLogo />
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Homepage />} />
          {/* {loggedIn&& */}
          <Route path="/bustickets" exact element={<BusTickets />} />
          {/* } */}
          {loggedIn&&<Route path="/mybookings" exact element={<MyBookings />} />}
          <Route path='*' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
