const IrctcReceiptForm = ({ receiptData, setReceiptData }) => {
  const update = (field) => (e) =>
    setReceiptData({ ...receiptData, [field]: e.target.value });

  const updatePassenger = (index, field) => (e) => {
    const passengers = [...receiptData.passengers];
    passengers[index] = { ...passengers[index], [field]: e.target.value };
    setReceiptData({ ...receiptData, passengers });
  };

  const addPassenger = () => {
    setReceiptData({
      ...receiptData,
      passengers: [
        ...receiptData.passengers,
        { name: "", age: "", gender: "Male", catering: "N/A", status: "CNF", coach: "", seatBerth: "" },
      ],
    });
  };

  const removePassenger = (index) => {
    if (receiptData.passengers.length <= 1) return;
    const passengers = receiptData.passengers.filter((_, i) => i !== index);
    setReceiptData({ ...receiptData, passengers });
  };

  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        <div className="container">
          <p className="fw-bold text-muted mb-3">User & Booking</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">User Name</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.userName}
                  placeholder="e.g. Vikram Bhimannavar" onChange={update("userName")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">User ID</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.userId}
                  placeholder="e.g. v15vikram" onChange={update("userId")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">Passenger Mobile</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.passengerMobile}
                  placeholder="e.g. 8050286848" onChange={update("passengerMobile")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">PNR No</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.pnrNo}
                  placeholder="e.g. 8137953588" onChange={update("pnrNo")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">Transaction ID</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.transactionId}
                  placeholder="e.g. 100006042328192" onChange={update("transactionId")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">Date & Time of Booking</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.bookingDateTime}
                  placeholder="e.g. 11-Sep-2025 02:13:51 PM HRS" onChange={update("bookingDateTime")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Train Details</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">Train No. / Name</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.trainNoName}
                  placeholder="e.g. 01023 / PUNE KOP SPECIAL" onChange={update("trainNoName")} required />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">Quota</label>
                <select className="form-select form-select-sm" value={receiptData.quota} onChange={update("quota")} required>
                  <option value="GENERAL">GENERAL</option>
                  <option value="TATKAL">TATKAL</option>
                  <option value="PREMIUM TATKAL">PREMIUM TATKAL</option>
                  <option value="LADIES">LADIES</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label className="form-label">Class</label>
                <select className="form-select form-select-sm" value={receiptData.travelClass} onChange={update("travelClass")} required>
                  <option value="SLEEPER CLASS">SLEEPER CLASS</option>
                  <option value="THIRD AC">THIRD AC</option>
                  <option value="SECOND AC">SECOND AC</option>
                  <option value="FIRST AC">FIRST AC</option>
                  <option value="GENERAL">GENERAL</option>
                  <option value="CHAIR CAR">CHAIR CAR</option>
                  <option value="EXEC CHAIR CAR">EXEC CHAIR CAR</option>
                </select>
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Journey Details</p>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">From</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.fromStation}
                  placeholder="e.g. PUNE JN (PUNE)" onChange={update("fromStation")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">To</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.toStation}
                  placeholder="e.g. MIRAJ JN (MRJ)" onChange={update("toStation")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Boarding At</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.boardingAt}
                  placeholder="e.g. PUNE" onChange={update("boardingAt")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Reservation Up to</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.reservationUpTo}
                  placeholder="e.g. MIRAJ JN ( MRJ)" onChange={update("reservationUpTo")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Date of Journey</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.dateOfJourney}
                  placeholder="e.g. 11-Sep-2025" onChange={update("dateOfJourney")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Date of Boarding</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.dateOfBoarding}
                  placeholder="e.g. 11-Sep-2025" onChange={update("dateOfBoarding")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Scheduled Departure</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.scheduledDeparture}
                  placeholder="e.g. 11-Sep-2025 21:40" onChange={update("scheduledDeparture")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Scheduled Arrival</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.scheduledArrival}
                  placeholder="e.g. 12-Sep-2025 03:25" onChange={update("scheduledArrival")} required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-2">
                <label className="form-label">Distance</label>
                <input type="text" className="form-control form-control-sm" value={receiptData.distance}
                  placeholder="e.g. 279KM" onChange={update("distance")} required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-2">
                <label className="form-label">Adult</label>
                <input type="number" className="form-control form-control-sm" value={receiptData.adultCount}
                  onChange={update("adultCount")} required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-2">
                <label className="form-label">Child</label>
                <input type="number" className="form-control form-control-sm" value={receiptData.childCount}
                  onChange={update("childCount")} required />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-2">
                <label className="form-label">Insurance Count</label>
                <input type="number" className="form-control form-control-sm" value={receiptData.insuranceCount}
                  onChange={update("insuranceCount")} required />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">
            Passenger Details
            <button type="button" className="btn btn-sm btn-outline-primary ms-2" onClick={addPassenger}>
              + Add Passenger
            </button>
          </p>
          {receiptData.passengers.map((p, i) => (
            <div className="row align-items-end mb-2" key={i}>
              <div className="col-md-2">
                <label className="form-label">Name</label>
                <input type="text" className="form-control form-control-sm" value={p.name}
                  placeholder="Passenger name" onChange={updatePassenger(i, "name")} required />
              </div>
              <div className="col-md-1">
                <label className="form-label">Age</label>
                <input type="number" className="form-control form-control-sm" value={p.age}
                  onChange={updatePassenger(i, "age")} required />
              </div>
              <div className="col-md-1">
                <label className="form-label">Gender</label>
                <select className="form-select form-select-sm" value={p.gender} onChange={updatePassenger(i, "gender")}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-md-2">
                <label className="form-label">Catering</label>
                <input type="text" className="form-control form-control-sm" value={p.catering}
                  placeholder="N/A" onChange={updatePassenger(i, "catering")} />
              </div>
              <div className="col-md-1">
                <label className="form-label">Status</label>
                <select className="form-select form-select-sm" value={p.status} onChange={updatePassenger(i, "status")}>
                  <option value="CNF">CNF</option>
                  <option value="WL">WL</option>
                  <option value="RAC">RAC</option>
                </select>
              </div>
              <div className="col-md-1">
                <label className="form-label">Coach</label>
                <input type="text" className="form-control form-control-sm" value={p.coach}
                  placeholder="S1" onChange={updatePassenger(i, "coach")} required />
              </div>
              <div className="col-md-2">
                <label className="form-label">Seat/Berth</label>
                <input type="text" className="form-control form-control-sm" value={p.seatBerth}
                  placeholder="31" onChange={updatePassenger(i, "seatBerth")} required />
              </div>
              <div className="col-md-1">
                {receiptData.passengers.length > 1 && (
                  <button type="button" className="btn btn-sm btn-outline-danger mt-3" onClick={() => removePassenger(i)}>✕</button>
                )}
              </div>
            </div>
          ))}

          <hr />
          <p className="fw-bold text-muted mb-3">Fare Details</p>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Ticket Fare (Rs.)</label>
                <input type="number" step="0.01" className="form-control form-control-sm" value={receiptData.ticketFare}
                  placeholder="e.g. 310.00" onChange={update("ticketFare")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Convenience Fee (Rs.)</label>
                <input type="number" step="0.01" className="form-control form-control-sm" value={receiptData.convenienceFee}
                  placeholder="e.g. 11.80" onChange={update("convenienceFee")} required />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label className="form-label">Travel Insurance (Rs.)</label>
                <input type="number" step="0.01" className="form-control form-control-sm" value={receiptData.travelInsurance}
                  placeholder="e.g. 0.45" onChange={update("travelInsurance")} required />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrctcReceiptForm;
