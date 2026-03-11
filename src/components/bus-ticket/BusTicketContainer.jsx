import { useState, useRef, useEffect } from "react";
import BusTicketForm from "./BusTicketForm";
import BusTicketToPrint from "./BusTicketToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";

const initialObj = {
  passengerName: "Tejas Rathi",
  passengerAge: "30",
  passengerGender: "MALE",
  fromCity: "Pune",
  toCity: "Goa",
  journeyDate: "2026-02-09",
  journeyTime: "23:15",
  droppingDate: "2026-02-10",
  droppingTime: "09:30",
  travelsName: "Shri Sai Holidays",
  busType: "A/C Sleeper (2+1)",
  travelsPhone: "1822771929",
  ticketPrice: "941.7",
  savingsAmount: "44.95",
  ticketNumber: "TV3B21281280",
  pnrNumber: "253545",
  boardingAddress: "Swargate Sana Parking 42020",
  boardingLandmark: "Swargate Krushnika Travels Opp Ashray Hotel Near Laxmi Narayan Theatre",
  boardingPhone1: "1168032020",
  boardingPhone2: "1168032020",
  droppingAddress: "Panjim Ritz Classic Patto Restaurant Behind Ktc Bus Stand",
  seatNumber: "U4",
};

const requiredFields = [
  "passengerName", "passengerAge", "passengerGender",
  "fromCity", "toCity",
  "journeyDate", "journeyTime", "droppingDate", "droppingTime",
  "travelsName", "busType", "travelsPhone",
  "ticketPrice", "savingsAmount",
  "ticketNumber", "pnrNumber",
  "boardingAddress", "boardingLandmark", "boardingPhone1", "boardingPhone2",
  "droppingAddress", "seatNumber",
];

const BusTicketContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ticketData, setTicketData] = useState(initialObj);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    const allFilled = requiredFields.every((f) => ticketData[f] !== "");
    setDisableSubmit(!allFilled);
  }, [ticketData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = requiredFields.every((f) => ticketData[f] !== "");
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
            RedBus Ticket Generator
          </p>
          <div className="row">
            <div className="col-12 offset-md-1 col-md-10 my-3">
              <BusTicketForm
                ticketData={ticketData}
                setTicketData={setTicketData}
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={disableSubmit}
                >
                  Submit
                </button>
                <Link to="/" className="btn btn-outline-dark ms-3">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </form>
      )}

      {!!submitted && (
        <div className="my-3">
          <p className="h5 text-center mb-0 text-muted">
            Bus Ticket Preview
          </p>
          <BusTicketToPrint ref={componentRef} ticketData={ticketData} />
          <div className="d-flex justify-content-center align-items-center my-3">
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary">Print/Export to PDF</button>
              )}
              content={() => componentRef.current}
            />
            <button
              className="btn btn-outline-dark ms-2"
              onClick={() => setSubmitted(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusTicketContainer;
