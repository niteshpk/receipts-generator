import React from "react";
import LaptopSubmissionTemplate from "./LaptopSubmissionTemplate";

class LaptopSubmissionReceiptToPrint extends React.Component {
  render() {
    return <LaptopSubmissionTemplate receiptData={this.props.receiptData} />;
  }
}

export default LaptopSubmissionReceiptToPrint;
