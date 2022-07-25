import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Register from "./Components/Credentials/Register";
import Login from "./Components/Credentials/Login";
import BusTickets from "./Components/Bookings/BusTickets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLogo from "./Components/Homepage/HomepageLogo";
import MyBookings from "./Components/Bookings/MyBookings";

function App() {
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
          <Route path="/" element={<Homepage />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/bustickets" exact element={<BusTickets />} />
          <Route path="/mybookings" exact element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
