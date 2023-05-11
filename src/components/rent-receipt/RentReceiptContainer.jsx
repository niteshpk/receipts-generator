import { useState, useRef, useEffect } from "react";
import RentReceiptForm from "./RentReceiptForm";
import ReceiptToPrint from "./ReceiptToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";

const initialObj = {
  receiptNo: "",
  receiptDate: "",
  rentAmount: "",
  tenantName: "",
  fullAddress: "",
  fromDate: "",
  toDate: "",
  landlordName: "",
  landlordPAN: "",
  showStamp: false,
};

const RentReceiptContainer = () => {
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
      receiptDate,
      rentAmount,
      tenantName,
      fullAddress,
      fromDate,
      toDate,
      landlordName,
      landlordPAN,
    } = receiptData;

    if (
      receiptNo &&
      receiptDate &&
      rentAmount &&
      tenantName &&
      fullAddress &&
      fromDate &&
      toDate &&
      landlordName &&
      landlordPAN
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
      receiptDate,
      rentAmount,
      tenantName,
      fullAddress,
      fromDate,
      toDate,
      landlordName,
      landlordPAN,
    } = receiptData;

    if (
      !receiptNo ||
      !receiptDate ||
      !rentAmount ||
      !tenantName ||
      !fullAddress ||
      !fromDate ||
      !toDate ||
      !landlordName ||
      !landlordPAN
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
          <p className="h5 text-center my-3 text-muted">Rent Receipt Form</p>

          <div className="row">
            <div className="col-12 offset-md-2 col-md-8">
              <RentReceiptForm
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
                <Link to="/" className="btn btn-outline-primary ms-3">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </form>
      )}

      {!!submitted && (
        <>
          <p className="h5 text-center my-3 mb-0">Rent Receipt Preview</p>
          <ReceiptToPrint ref={componentRef} receiptData={receiptData} />
          <div className="d-flex justify-content-center align-items-center">
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary">Print/Export to PDF</button>
              )}
              content={() => componentRef.current}
            />
            <button
              className="btn btn-outline-primary ms-2"
              onClick={() => setSubmitted(false)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RentReceiptContainer;
