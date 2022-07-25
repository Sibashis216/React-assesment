import React from "react";
import Bookingheader from "./Bookingheader";
import Tickets from "./Tickets";
import '../Homepage/Homepage.css'
import './BusTicket.css'

function BusTickets() {
  return (
    <div className="gradient-tickets">
      <div className="booking-header">
        <Bookingheader />
      </div>
      <div className="ticket-box">
        <Tickets />
      </div>
    </div>
  );
}

export default BusTickets;
