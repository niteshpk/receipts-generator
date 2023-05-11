import React from "react";
import WifiReceiptTemplate from "./WifiReceiptTemplate";

class ReceiptToPrint extends React.Component {
  render() {
    return <WifiReceiptTemplate receiptData={this.props.receiptData} />;
  }
}

export default ReceiptToPrint;
