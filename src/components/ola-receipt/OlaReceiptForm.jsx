const OlaReceiptForm = ({ receiptData, setReceiptData }) => {
  const update = (field) => (e) =>
    setReceiptData({ ...receiptData, [field]: e.target.value });

  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        <div className="container">
          <p className="fw-bold text-muted mb-3">Customer & Ride Info</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="customerName" className="form-label">Customer Name</label>
                <input type="text" className="form-control" id="customerName"
                  value={receiptData.customerName} placeholder="e.g. Mukund Rajebhosale"
                  onChange={update("customerName")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="rideDate" className="form-label">Ride Date</label>
                <input type="date" className="form-control" id="rideDate"
                  value={receiptData.rideDate} onChange={update("rideDate")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="crnNumber" className="form-label">CRN Number</label>
                <input type="text" className="form-control" id="crnNumber"
                  value={receiptData.crnNumber} placeholder="e.g. CRN10545251873"
                  onChange={update("crnNumber")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Driver & Vehicle</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="driverName" className="form-label">Driver Name</label>
                <input type="text" className="form-control" id="driverName"
                  value={receiptData.driverName} placeholder="e.g. Taware parasram appasaheb"
                  onChange={update("driverName")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="carType" className="form-label">Car Type & Model</label>
                <input type="text" className="form-control" id="carType"
                  value={receiptData.carType} placeholder="e.g. Prime Plus - White AURA"
                  onChange={update("carType")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Travel Details</p>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="travelDistance" className="form-label">Distance (km)</label>
                <input type="number" step="0.1" className="form-control" id="travelDistance"
                  value={receiptData.travelDistance} placeholder="e.g. 65.7"
                  onChange={update("travelDistance")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="travelTimeHrs" className="form-label">Travel Time (hrs)</label>
                <input type="number" className="form-control" id="travelTimeHrs"
                  value={receiptData.travelTimeHrs} placeholder="e.g. 1"
                  onChange={update("travelTimeHrs")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="travelTimeMins" className="form-label">Travel Time (min)</label>
                <input type="number" className="form-control" id="travelTimeMins"
                  value={receiptData.travelTimeMins} placeholder="e.g. 19"
                  onChange={update("travelTimeMins")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Trip Details</p>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="pickupTime" className="form-label">Pickup Time</label>
                <input type="time" className="form-control" id="pickupTime"
                  value={receiptData.pickupTime} onChange={update("pickupTime")} required />
              </div>
            </div>
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="pickupAddress" className="form-label">Pickup Address</label>
                <textarea className="form-control" id="pickupAddress" rows={2}
                  value={receiptData.pickupAddress}
                  placeholder="e.g. Tower 19, FXP8+5R Joyville Hadapsar, Solapur - Pune Hwy, Annex, Shewalewadi, Pune, Maharashtra 412307, India"
                  onChange={update("pickupAddress")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="dropTime" className="form-label">Drop Time</label>
                <input type="time" className="form-control" id="dropTime"
                  value={receiptData.dropTime} onChange={update("dropTime")} required />
              </div>
            </div>
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="dropAddress" className="form-label">Drop Address</label>
                <textarea className="form-control" id="dropAddress" rows={2}
                  value={receiptData.dropAddress}
                  placeholder="e.g. Shitole Wasti, Rd, Kurkumbh, Maharashtra, 413802, India"
                  onChange={update("dropAddress")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Map Coordinates</p>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="pickupLat" className="form-label">Pickup Latitude</label>
                <input type="number" step="0.0001" className="form-control" id="pickupLat"
                  value={receiptData.pickupLat} placeholder="e.g. 18.4953"
                  onChange={update("pickupLat")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="pickupLng" className="form-label">Pickup Longitude</label>
                <input type="number" step="0.0001" className="form-control" id="pickupLng"
                  value={receiptData.pickupLng} placeholder="e.g. 73.9370"
                  onChange={update("pickupLng")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="dropLat" className="form-label">Drop Latitude</label>
                <input type="number" step="0.0001" className="form-control" id="dropLat"
                  value={receiptData.dropLat} placeholder="e.g. 18.2150"
                  onChange={update("dropLat")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="dropLng" className="form-label">Drop Longitude</label>
                <input type="number" step="0.0001" className="form-control" id="dropLng"
                  value={receiptData.dropLng} placeholder="e.g. 74.0400"
                  onChange={update("dropLng")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Invoice Details</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="invoiceId" className="form-label">Invoice ID</label>
                <input type="text" className="form-control" id="invoiceId"
                  value={receiptData.invoiceId} placeholder="e.g. CIBFDZPGG524604"
                  onChange={update("invoiceId")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">Customer Mobile</label>
                <input type="text" className="form-control" id="mobileNumber"
                  value={receiptData.mobileNumber} placeholder="e.g. +919011195219"
                  onChange={update("mobileNumber")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Pricing & Payment</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="rideFare" className="form-label">Ride Fare (₹)</label>
                <input type="number" step="0.01" className="form-control" id="rideFare"
                  value={receiptData.rideFare} placeholder="e.g. 1713.16"
                  onChange={update("rideFare")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="convenienceFees" className="form-label">Convenience Fees (₹)</label>
                <input type="number" step="0.01" className="form-control" id="convenienceFees"
                  value={receiptData.convenienceFees} placeholder="e.g. 41.52"
                  onChange={update("convenienceFees")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                <select className="form-select" id="paymentMethod"
                  value={receiptData.paymentMethod} onChange={update("paymentMethod")} required>
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="Ola Money">Ola Money</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlaReceiptForm;
