import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <h5 className="card-header">Rent Receipt</h5>
            <div className="card-body">
              <p className="card-text">
                Provide the basic information required to generate the rent
                receipt. Find the preview of rent receipt to be generated. Once
                happy with preview you can export/download the rent receipt as
                PDF file.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="/Sample-Rent-Receipt.pdf"
                  className="btn btn-outline-dark me-2"
                  target="_blank"
                >
                  Sample Rent Receipt
                </a>
                <Link to="/rent-receipt" className="btn btn-primary">
                  Generate Rent Receipt
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <h5 className="card-header">Wifi Receipt</h5>
            <div className="card-body">
              <p className="card-text">
                Provide the basic information required to generate the wifi
                receipt. Find the preview of wifi receipt to be generated. Once
                happy with preview you can export/download the wifi receipt as
                PDF file.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="/Sample-Wifi-Receipt.pdf"
                  className="btn btn-outline-dark me-2"
                  target="_blank"
                >
                  Sample Wifi Receipt
                </a>
                <Link to="/wifi-receipt" className="btn btn-primary">
                  Generate Wifi Receipt
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <div className="card">
            <h5 className="card-header">Laptop Submission Form</h5>
            <div className="card-body">
              <p className="card-text">
                Provide the basic information required to generate the laptop
                submission receipt. Find the preview of laptop submission form
                to be generated. Once happy with preview you can export/download
                the laptop submission form as PDF file.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="/Laptop-Submission-Form.pdf"
                  className="btn btn-outline-dark me-2"
                  target="_blank"
                >
                  Laptop Submission Form
                </a>
                <Link
                  to="/laptop-submission-receipt"
                  className="btn btn-primary"
                >
                  Generate Laptop Submission Receipt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
