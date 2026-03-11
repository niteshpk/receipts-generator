const IrctcReceiptTemplate = ({ receiptData }) => {
  if (!receiptData) return null;

  const {
    userName, userId, passengerMobile,
    pnrNo, transactionId, bookingDateTime,
    trainNoName, quota, travelClass,
    fromStation, toStation, boardingAt, reservationUpTo,
    dateOfJourney, dateOfBoarding, scheduledDeparture, scheduledArrival,
    distance, adultCount, childCount, insuranceCount,
    passengers,
    ticketFare, convenienceFee, travelInsurance,
  } = receiptData;

  const fare = parseFloat(ticketFare) || 0;
  const conv = parseFloat(convenienceFee) || 0;
  const ins = parseFloat(travelInsurance) || 0;
  const totalFare = (fare + conv + ins).toFixed(2);

  return (
    <div className="irctc-wrapper">
      <div className="irctc-receipt">
        {/* System notice */}
        <div className="irctc-notice">
          This is a system generated mail. Please do not reply to this email ID. (1) Call our 24-hour Customer Care (2) For IRCTC related queries use -{" "}
          <a href="https://equery.irctc.co.in">https://equery.irctc.co.in</a>
        </div>

        {/* Aadhaar notice */}
        <div className="irctc-aadhaar-notice">
          From 01st July 2025, Aadhaar authentication of IRCTC user profile is mandatory to book Tatkal and Premium Tatkal tickets.
        </div>

        {/* Ticket Confirmation header */}
        <div className="irctc-header">
          <span className="irctc-header-title">Ticket Confirmation</span>
          <span className="irctc-header-logo">IRCTC</span>
        </div>

        {/* Dear user */}
        <div className="irctc-body">
          <p className="irctc-dear">
            <strong>Dear {userName}(User Id: {userId}),</strong>
          </p>
          <p className="irctc-thankyou">
            Thank you for using IRCTC's online rail reservation facility. Your booking details are indicated below.
          </p>

          {/* Booking details grid */}
          <table className="irctc-details-table">
            <tbody>
              <tr>
                <td><strong>PNR No. :</strong></td>
                <td>{pnrNo}</td>
                <td><strong>Train No. / Name :</strong></td>
                <td>{trainNoName}</td>
                <td><strong>Quota :</strong></td>
                <td>{quota}</td>
              </tr>
              <tr>
                <td><strong>Transaction ID :</strong></td>
                <td>{transactionId}</td>
                <td><strong>Date &amp; Time of Booking :</strong></td>
                <td>{bookingDateTime}</td>
                <td><strong>Class :</strong></td>
                <td>{travelClass}</td>
              </tr>
              <tr>
                <td><strong>From :</strong></td>
                <td>{fromStation}</td>
                <td><strong>Date of Journey :</strong></td>
                <td>{dateOfJourney}</td>
                <td><strong>To :</strong></td>
                <td>{toStation}</td>
              </tr>
              <tr>
                <td><strong>Boarding At :</strong></td>
                <td>{boardingAt}</td>
                <td><strong>Date Of Boarding :</strong></td>
                <td>{dateOfBoarding}</td>
                <td><strong>Scheduled Departure* :</strong></td>
                <td>{scheduledDeparture}</td>
              </tr>
              <tr>
                <td><strong>Reservation Up to :</strong></td>
                <td>{reservationUpTo}</td>
                <td><strong>Scheduled Arrival :</strong></td>
                <td>{scheduledArrival}</td>
                <td><strong>Adult:</strong> {adultCount}</td>
                <td><strong>Child:</strong> {childCount}</td>
              </tr>
              <tr>
                <td><strong>Passenger Mobile No :</strong></td>
                <td>{passengerMobile}</td>
                <td><strong>Distance :</strong></td>
                <td>{distance}</td>
                <td><strong>Insurance (No. of Psng) :</strong></td>
                <td>{insuranceCount}</td>
              </tr>
            </tbody>
          </table>

          {/* Passenger Details */}
          <div className="irctc-section-header irctc-section-passenger">Passenger Details</div>
          <table className="irctc-passenger-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Catering Service Option</th>
                <th>Status</th>
                <th>Coach</th>
                <th>Seat / Berth / WL No</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((p, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.gender}</td>
                  <td>{p.catering || "N/A"}</td>
                  <td>{p.status}</td>
                  <td>{p.coach}</td>
                  <td>{p.seatBerth}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Fare Details */}
          <div className="irctc-section-header irctc-section-fare">Fare Details (Inclusive of GST)</div>
          <table className="irctc-fare-table">
            <thead>
              <tr>
                <th>Ticket Fare</th>
                <th>Convenience Fee</th>
                <th>Travel Insurance Premium</th>
                <th>Total Fare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rs. {parseFloat(ticketFare).toFixed(2)}</td>
                <td>Rs. {parseFloat(convenienceFee).toFixed(2)}</td>
                <td>Rs. {parseFloat(travelInsurance).toFixed(2)}</td>
                <td>Rs. {totalFare} *</td>
              </tr>
            </tbody>
          </table>
          <p className="irctc-gateway-note">* Payment Gateway charges as applicable.</p>

          {/* Must Read */}
          <div className="irctc-section-header irctc-section-mustread">Must Read</div>
          <ul className="irctc-mustread-list">
            <li>
              Please take a screenshot of ERS i.e. Virtual Reservation Message(VRM) OF YOUR TICKET FROM YOUR Booked Tickets History page. You have to carry this VRM or SMS send to you along with any Govt. authorized ID Card during train journey in original. Both theSMS(or VRM)&amp; original ID will be examined by ticket checking staff on stations/trains for verification purpose.
            </li>
            <li>
              This ticket is booked on a personal user ID and can not be sold by an agent. If bought from an agent by any individual, it is at his/her own risk.
            </li>
            <li>
              Passengers are advised not to carry inflammable/dangerous/explosive articles as part of their luggage and also to desist from smoking in the trains.
            </li>
          </ul>

          {/* How to */}
          <div className="irctc-section-header irctc-section-howto">How to</div>
          <div className="irctc-howto-grid">
            <ul>
              <li>Cancel your e-ticket/ File TDR for e-ticket</li>
              <li>Change boarding point on e-ticket</li>
              <li>Change in name on a reserved ticket</li>
            </ul>
            <ul>
              <li>Railway Refund Rules</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="irctc-section-header irctc-section-care">Customer Care</div>
          <ul className="irctc-care-list">
            <li>
              In case you require any further assistance, please raise your query at{" "}
              <a href="https://equery.irctc.co.in">https://equery.irctc.co.in</a>{" "}
              or call us at 14646 / 08044647999 / 08035734999 ( 24*7 Hrs ; Language: Hindi or English).
            </li>
            <li>
              Just dial 139 from your landline, mobile &amp; CDMA phones for railway enquiries.
            </li>
            <li>
              For any enquiries or information regarding your transaction with IRCTC, do not provide your credit/debit card details by any means to IRCTC. All your queries can be replied on the basis of 15 digit IRCTC Transaction id/ 10 digit PNR no./ User id. IRCTC does not store the credit/ debit card information in any form during the transaction.
            </li>
          </ul>

          {/* Book Hotels */}
          <div className="irctc-section-header irctc-section-hotels">Book Hotels</div>
          <p className="irctc-hotels-text">
            Booked your train ticket, now complete it with booking the hotels on IRCTC website for a wonderful stay. <strong>"Book Now!"</strong>
          </p>
          <p className="irctc-hotels-text">
            To book and get food delivered on your train berth, please call IRCTC Toll free No. 1323 or log in at{" "}
            <a href="https://www.ecatering.irctc.co.in">www.ecatering.irctc.co.in</a>
          </p>

          <div className="irctc-separator">
            {"*".repeat(120)}
          </div>

          <p className="irctc-noprint-msg">
            Please don't print unless extremely necessary.
          </p>

          <div className="irctc-signoff">
            <strong>Warm Regards,</strong>
            <br />Customer Care
            <br />Internet Ticketing
            <br />IRCTC
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrctcReceiptTemplate;
