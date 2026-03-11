import React from "react";
import CSVReceiptTemplate from "./CSVReceiptTemplate";

class ReceiptToPrint extends React.Component {
  render() {
    return <CSVReceiptTemplate receiptData={this.props.receiptData} />;
  }
}

export default ReceiptToPrint;
