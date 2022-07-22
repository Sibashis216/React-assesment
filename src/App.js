import "./App.css";
import Homepage from "./Components/Homepage";
import Register from "./Components/Register";
import Login from "./Components/Login";
import BusTickets from "./Components/Bookings/BusTickets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLogo from "./Components/HomepageLogo";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <HomepageLogo/>
        {/* <Homepage/> */}
         <Routes> 
          <Route path="/"  element={<Homepage/>}/>
          {/* <Route path="/"  element={}/> */}
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/bustickets" exact element={<BusTickets/>}/> 
          {/* <Register/> */}
          {/* <Login/> */}
          {/* <BusTickets/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
