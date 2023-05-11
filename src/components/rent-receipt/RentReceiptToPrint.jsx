import React from "react";
import RentReceiptTemplate from "./RentReceiptTemplate";

class RentReceiptToPrint extends React.Component {
  render() {
    return <RentReceiptTemplate receiptData={this.props.receiptData} />;
  }
}

export default RentReceiptToPrint;
