import { useState, useRef, useEffect } from "react";
import WifiReceiptForm from "../wifi-receipt/WifiReceiptForm";
import WifiReceiptToPrint from "./WifiReceiptToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";

const initialObj = {
  receiptNo: "",
  transactionDate: "",
  amount: "",
  transactionId: "",
  accountNo: "",
  bankReferenceNo: "",
  invoiceNo: "",
  serviceProvider: "",
  tagLine: "",
  note: "",
};

const WifiReceiptContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(initialObj);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const componentRef = useRef();

  useEffect(() => {
    const show = JSON.parse(localStorage.getItem("showStamp", false));
    setReceiptData({ ...receiptData, showStamp: show });
  }, []);

  useEffect(() => {
    const {
      receiptNo,
      transactionDate,
      amount,
      transactionId,
      accountNo,
      bankReferenceNo,
      invoiceNo,
      serviceProvider,
      tagLine,
      note,
    } = receiptData;

    if (
      receiptNo &&
      transactionDate &&
      amount &&
      transactionId &&
      accountNo &&
      bankReferenceNo &&
      invoiceNo &&
      serviceProvider &&
      tagLine &&
      note
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [receiptData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      receiptNo,
      transactionDate,
      amount,
      transactionId,
      accountNo,
      bankReferenceNo,
      invoiceNo,
      serviceProvider,
      tagLine,
      note,
    } = receiptData;

    if (
      !receiptNo ||
      !transactionDate ||
      !amount ||
      !transactionId ||
      !accountNo ||
      !bankReferenceNo ||
      !invoiceNo ||
      !serviceProvider ||
      !tagLine ||
      !note
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <p className="h5 text-center my-3 text-muted">Wifi Receipt Form</p>

          <div className="row">
            <div className="col-12 offset-md-2 col-md-8 my-3">
              <WifiReceiptForm
                receiptData={receiptData}
                setReceiptData={setReceiptData}
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
        <div className="my-3 ">
          <p className="h5 text-center mb-0 text-muted">Wifi Receipt Preview</p>
          <WifiReceiptToPrint ref={componentRef} receiptData={receiptData} />
          <div className="d-flex justify-content-center align-items-center ">
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

export default WifiReceiptContainer;
