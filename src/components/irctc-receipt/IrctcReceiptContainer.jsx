import { useState, useRef, useEffect } from "react";
import IrctcReceiptForm from "./IrctcReceiptForm";
import IrctcReceiptToPrint from "./IrctcReceiptToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";

const initialObj = {
  userName: "Vikram Bhimannavar",
  userId: "v15vikram",
  passengerMobile: "8050286848",
  pnrNo: "8137953588",
  transactionId: "100006042328192",
  bookingDateTime: "11-Sep-2025 02:13:51 PM HRS",
  trainNoName: "01023 / PUNE KOP SPECIAL",
  quota: "GENERAL",
  travelClass: "SLEEPER CLASS",
  fromStation: "PUNE JN (PUNE)",
  toStation: "MIRAJ JN (MRJ)",
  boardingAt: "PUNE",
  reservationUpTo: "MIRAJ JN ( MRJ)",
  dateOfJourney: "11-Sep-2025",
  dateOfBoarding: "11-Sep-2025",
  scheduledDeparture: "11-Sep-2025 21:40",
  scheduledArrival: "12-Sep-2025 03:25",
  distance: "279KM",
  adultCount: "1",
  childCount: "0",
  insuranceCount: "1",
  passengers: [
    { name: "VIKRAM BHIMANNAV", age: "33", gender: "Male", catering: "N/A", status: "CNF", coach: "S1", seatBerth: "31" },
  ],
  ticketFare: "310.00",
  convenienceFee: "11.80",
  travelInsurance: "0.45",
};

const requiredFields = [
  "userName", "userId", "passengerMobile",
  "pnrNo", "transactionId", "bookingDateTime",
  "trainNoName", "quota", "travelClass",
  "fromStation", "toStation", "boardingAt", "reservationUpTo",
  "dateOfJourney", "dateOfBoarding", "scheduledDeparture", "scheduledArrival",
  "distance", "adultCount", "childCount", "insuranceCount",
  "ticketFare", "convenienceFee", "travelInsurance",
];

const IrctcReceiptContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(initialObj);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    const fieldsOk = requiredFields.every((f) => receiptData[f] !== "");
    const passOk = receiptData.passengers.length > 0 &&
      receiptData.passengers.every((p) => p.name && p.age && p.coach && p.seatBerth);
    setDisableSubmit(!(fieldsOk && passOk));
  }, [receiptData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <p className="h5 text-center my-3 text-muted">IRCTC Receipt Generator</p>
          <div className="row">
            <div className="col-12 offset-md-1 col-md-10 my-3">
              <IrctcReceiptForm receiptData={receiptData} setReceiptData={setReceiptData} />
              <div className="text-center">
                <button type="submit" className="btn btn-primary" disabled={disableSubmit}>Submit</button>
                <Link to="/" className="btn btn-outline-dark ms-3">Cancel</Link>
              </div>
            </div>
          </div>
        </form>
      )}

      {!!submitted && (
        <div className="my-3">
          <p className="h5 text-center mb-0 text-muted">IRCTC Receipt Preview</p>
          <IrctcReceiptToPrint ref={componentRef} receiptData={receiptData} />
          <div className="d-flex justify-content-center align-items-center my-3">
            <ReactToPrint
              trigger={() => <button className="btn btn-primary">Print/Export to PDF</button>}
              content={() => componentRef.current}
            />
            <button className="btn btn-outline-dark ms-2" onClick={() => setSubmitted(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrctcReceiptContainer;
