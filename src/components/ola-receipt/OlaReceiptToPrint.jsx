import React from "react";
import OlaReceiptTemplate from "./OlaReceiptTemplate";

class OlaReceiptToPrint extends React.Component {
  render() {
    return <OlaReceiptTemplate receiptData={this.props.receiptData} />;
  }
}

export default OlaReceiptToPrint;
