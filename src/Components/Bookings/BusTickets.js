import React from "react";
import Bookingheader from "./Bookingheader";
import Tickets from "./Tickets";

function BusTickets() {
  return (
    <div>
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
