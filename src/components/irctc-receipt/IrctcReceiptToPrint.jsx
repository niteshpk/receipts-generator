import React from "react";
import IrctcReceiptTemplate from "./IrctcReceiptTemplate";

class IrctcReceiptToPrint extends React.Component {
  render() {
    return <IrctcReceiptTemplate receiptData={this.props.receiptData} />;
  }
}

export default IrctcReceiptToPrint;
