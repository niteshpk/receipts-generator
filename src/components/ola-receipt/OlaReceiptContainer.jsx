import { useState, useRef, useEffect } from "react";
import OlaReceiptForm from "./OlaReceiptForm";
import OlaReceiptToPrint from "./OlaReceiptToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";

const initialObj = {
  customerName: "Mukund Sharma",
  rideDate: "2026-03-06",
  crnNumber: "CRN10545251873",
  driverName: "Taware parasram appasaheb",
  carType: "Prime Plus - White AURA",
  travelDistance: "65.7",
  travelTimeHrs: "1",
  travelTimeMins: "19",
  pickupTime: "08:10",
  pickupAddress: "Tower 19, FXP8+5R Joyville Hadapsar, Solapur - Pune Hwy, Annex, Shewalewadi, Pune, Maharashtra 412307, India",
  dropTime: "09:29",
  dropAddress: "Shitole Wasti, Rd, Kurkumbh, Maharashtra, 413802, India",
  pickupLat: "18.4953",
  pickupLng: "73.9370",
  dropLat: "18.2150",
  dropLng: "74.0400",
  rideFare: "1713.16",
  convenienceFees: "41.52",
  paymentMethod: "Cash",
  invoiceId: "CIBFDZPGG524604",
  mobileNumber: "+911010195219",
};

const requiredFields = [
  "customerName", "rideDate", "crnNumber",
  "driverName", "carType",
  "travelDistance", "travelTimeHrs", "travelTimeMins",
  "pickupTime", "pickupAddress", "dropTime", "dropAddress",
  "pickupLat", "pickupLng", "dropLat", "dropLng",
  "rideFare", "convenienceFees", "paymentMethod",
  "invoiceId", "mobileNumber",
];

const OlaReceiptContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(initialObj);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    const allFilled = requiredFields.every((f) => receiptData[f] !== "");
    setDisableSubmit(!allFilled);
  }, [receiptData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = requiredFields.every((f) => receiptData[f] !== "");
    if (!allFilled) {
      alert("Please fill in all the fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <p className="h5 text-center my-3 text-muted">
            Ola Receipt Generator
          </p>
          <div className="row">
            <div className="col-12 offset-md-1 col-md-10 my-3">
              <OlaReceiptForm
                receiptData={receiptData}
                setReceiptData={setReceiptData}
              />
              <div className="text-center">
                <button type="submit" className="btn btn-primary" disabled={disableSubmit}>
                  Submit
                </button>
                <Link to="/" className="btn btn-outline-dark ms-3">Cancel</Link>
              </div>
            </div>
          </div>
        </form>
      )}

      {!!submitted && (
        <div className="my-3">
          <p className="h5 text-center mb-0 text-muted">Ola Receipt Preview</p>
          <OlaReceiptToPrint ref={componentRef} receiptData={receiptData} />
          <div className="d-flex justify-content-center align-items-center my-3">
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary">Print/Export to PDF</button>
              )}
              content={() => componentRef.current}
            />
            <button className="btn btn-outline-dark ms-2" onClick={() => setSubmitted(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OlaReceiptContainer;
