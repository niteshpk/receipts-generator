const BusTicketForm = ({ ticketData, setTicketData }) => {
  const update = (field) => (e) =>
    setTicketData({ ...ticketData, [field]: e.target.value });

  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        <div className="container">
          <p className="fw-bold text-muted mb-3">Passenger Details</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="passengerName" className="form-label">
                  Passenger Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="passengerName"
                  value={ticketData.passengerName}
                  placeholder="Enter passenger name"
                  onChange={update("passengerName")}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="passengerAge" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="passengerAge"
                  value={ticketData.passengerAge}
                  placeholder="Enter age"
                  onChange={update("passengerAge")}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="passengerGender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="passengerGender"
                  value={ticketData.passengerGender}
                  onChange={update("passengerGender")}
                  required
                >
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                </select>
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Journey Details</p>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="fromCity" className="form-label">
                  From City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fromCity"
                  value={ticketData.fromCity}
                  placeholder="e.g. Pune"
                  onChange={update("fromCity")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="toCity" className="form-label">
                  To City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="toCity"
                  value={ticketData.toCity}
                  placeholder="e.g. Goa"
                  onChange={update("toCity")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="journeyDate" className="form-label">
                  Journey Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="journeyDate"
                  value={ticketData.journeyDate}
                  onChange={update("journeyDate")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="journeyTime" className="form-label">
                  Journey Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="journeyTime"
                  value={ticketData.journeyTime}
                  onChange={update("journeyTime")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="droppingDate" className="form-label">
                  Dropping Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="droppingDate"
                  value={ticketData.droppingDate}
                  onChange={update("droppingDate")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="droppingTime" className="form-label">
                  Dropping Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="droppingTime"
                  value={ticketData.droppingTime}
                  onChange={update("droppingTime")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="seatNumber" className="form-label">
                  Seat Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="seatNumber"
                  value={ticketData.seatNumber}
                  placeholder="e.g. U4"
                  onChange={update("seatNumber")}
                  required
                />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Travels Details</p>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="travelsName" className="form-label">
                  Travels Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="travelsName"
                  value={ticketData.travelsName}
                  placeholder="e.g. Shri Sai Holidays"
                  onChange={update("travelsName")}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="busType" className="form-label">
                  Bus Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="busType"
                  value={ticketData.busType}
                  placeholder="e.g. A/C Sleeper (2+1)"
                  onChange={update("busType")}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="travelsPhone" className="form-label">
                  Travels Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="travelsPhone"
                  value={ticketData.travelsPhone}
                  placeholder="e.g. 9822771929"
                  onChange={update("travelsPhone")}
                  required
                />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Price Details</p>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="ticketPrice" className="form-label">
                  Ticket Price (inclusive of GST)
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="ticketPrice"
                  value={ticketData.ticketPrice}
                  placeholder="e.g. 941.7"
                  onChange={update("ticketPrice")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="savingsAmount" className="form-label">
                  Savings Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="savingsAmount"
                  value={ticketData.savingsAmount}
                  placeholder="e.g. 44.95"
                  onChange={update("savingsAmount")}
                  required
                />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Ticket Info</p>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="ticketNumber" className="form-label">
                  Ticket Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ticketNumber"
                  value={ticketData.ticketNumber}
                  placeholder="e.g. TV3B21281280"
                  onChange={update("ticketNumber")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="pnrNumber" className="form-label">
                  PNR Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pnrNumber"
                  value={ticketData.pnrNumber}
                  placeholder="e.g. 253545"
                  onChange={update("pnrNumber")}
                  required
                />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Boarding Point</p>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="boardingAddress" className="form-label">
                  Boarding Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="boardingAddress"
                  value={ticketData.boardingAddress}
                  placeholder="e.g. Swargate Sana Parking 42020"
                  onChange={update("boardingAddress")}
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="boardingLandmark" className="form-label">
                  Landmark
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="boardingLandmark"
                  value={ticketData.boardingLandmark}
                  placeholder="e.g. Swargate Krushnika Travels Opp Ashray Hotel Near Laxmi Narayan Theatre"
                  onChange={update("boardingLandmark")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="boardingPhone1" className="form-label">
                  Phone 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="boardingPhone1"
                  value={ticketData.boardingPhone1}
                  placeholder="e.g. 9168032020"
                  onChange={update("boardingPhone1")}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="boardingPhone2" className="form-label">
                  Phone 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="boardingPhone2"
                  value={ticketData.boardingPhone2}
                  placeholder="e.g. 9168032020"
                  onChange={update("boardingPhone2")}
                  required
                />
              </div>
            </div>
          </div>

          <hr />
          <p className="fw-bold text-muted mb-3">Dropping Point</p>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="droppingAddress" className="form-label">
                  Dropping Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="droppingAddress"
                  value={ticketData.droppingAddress}
                  placeholder="e.g. Panjim Ritz Classic Patto Restaurant Behind Ktc Bus Stand"
                  onChange={update("droppingAddress")}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicketForm;
