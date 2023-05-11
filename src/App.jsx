import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 offset-md-3 col-md-6">
          <div className="card">
            <h5 className="card-header">Rent Receipt</h5>
            <div className="card-body">
              <p className="card-text">
                Provide the basic information required to generate the rent
                receipt. Find the preview of rent receipt to be generated. Once
                happy with preview you can export/download the rent receipt as
                PDF file.
              </p>
              <Link to="/rent-receipt" className="btn btn-primary">
                Rent Receipt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
