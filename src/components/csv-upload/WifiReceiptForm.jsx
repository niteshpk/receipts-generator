import React, { useState, useRef } from "react";
import Papa from "papaparse";
import RowJSONRenderer from "./RowJSONRenderer";
import WifiReceiptToPrint from "../wifi-receipt/WifiReceiptToPrint";
import ReactToPrint from "react-to-print";

const CSVReceiptForm = ({ receiptData, setReceiptData }) => {
  const [error, setError] = useState(null);
  const [started, setStarted] = useState(false);
  const [rows, setRows] = useState([]);
  const componentRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;
    if (!file.name.endsWith(".csv")) {
      setError("Please upload a valid CSV file.");
      return;
    }

    Papa.parse(file, {
      header: true, // Treat the first row as headers
      skipEmptyLines: true,
      complete: (result) => {
        const { data, errors } = result;

        if (errors.length) {
          setError("Error parsing CSV file.");
          return;
        }

        const validRows = data.filter(validateRow);
        setRows(validRows);
      },
    });
  };

  // Function to validate each row
  const validateRow = (row) => {
    return row.name && row.email && row.age; // Example validation
  };
  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        {!started && (
          <div className="container">
            <div className=" d-flex align-items-center">
              <div className="w-50">
                <input type="file" accept=".csv" onChange={handleFileUpload} />
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <div className="w-50">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!rows.length}
                  onClick={() => setStarted(true)}
                >
                  start
                </button>
              </div>
            </div>

            {!!rows.length && (
              <div className="row">
                {rows.length > 0 ? (
                  rows.map((row, index) => (
                    <RowJSONRenderer key={index} row={row} />
                  ))
                ) : (
                  <p>No valid data uploaded yet.</p>
                )}
              </div>
            )}
          </div>
        )}

        {!!started && (
          <div>
            <div className="my-3 ">
              <WifiReceiptToPrint
                ref={componentRef}
                receiptData={{
                  receiptNo: "receiptNo",
                  transactionDate: "receiptNo",
                  amount: "receiptNo",
                  transactionId: "receiptNo",
                  accountNo: "receiptNo",
                  bankReferenceNo: "receiptNo",
                  invoiceNo: "receiptNo",
                  serviceProvider: "receiptNo",
                  tagLine: "receiptNo",
                  note: "receiptNo",
                }}
              />
              <div className="d-flex justify-content-center align-items-center ">
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn-primary">
                      Print/Export to PDF
                    </button>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default CSVReceiptForm;
