import React from "react";
import BusTicketTemplate from "./BusTicketTemplate";

class BusTicketToPrint extends React.Component {
  render() {
    return <BusTicketTemplate ticketData={this.props.ticketData} />;
  }
}

export default BusTicketToPrint;
