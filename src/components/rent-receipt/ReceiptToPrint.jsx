import React from "react";
import RentReceiptTemplate from "./RentReceiptTemplate";

class ReceiptToPrint extends React.Component {
  render() {
    return <RentReceiptTemplate receiptData={this.props.receiptData} />;
  }
}

export default ReceiptToPrint;
