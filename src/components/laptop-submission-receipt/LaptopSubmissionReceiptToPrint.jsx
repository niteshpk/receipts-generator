import React, { forwardRef } from "react";
import LaptopSubmissionTemplate from "./LaptopSubmissionTemplate";

const LaptopSubmissionReceiptToPrint = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <LaptopSubmissionTemplate receiptData={props.receiptData} />
    </div>
  );
});

export default LaptopSubmissionReceiptToPrint;
