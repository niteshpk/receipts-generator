import redbusLogo from "../../assets/redbus-logo.jpg";
import bannerImg from "../../assets/redbus-banner.jpeg";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

const formatDateLong = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

const formatTime12 = (timeStr) => {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${String(hour12).padStart(2, "0")}:${m} ${ampm}`;
};

const formatDateShort = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = d.getDate();
  const suffix = (day === 1 || day === 21 || day === 31) ? "st" :
    (day === 2 || day === 22) ? "nd" :
    (day === 3 || day === 23) ? "rd" : "th";
  return `${day}${suffix} ${months[d.getMonth()]}`;
};

const addDays = (dateStr, days) => {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const getCancellationPolicy = (journeyDate, journeyTime, ticketPrice) => {
  if (!journeyDate || !ticketPrice) return [];
  const price = parseFloat(ticketPrice);

  const d7 = addDays(journeyDate, -7);
  const d3 = addDays(journeyDate, -3);
  const d1 = addDays(journeyDate, -1);

  const tiers = [
    {
      label: `Before ${formatDateShort(d7)} 11:00 PM`,
      percent: 10,
      amount: (price * 0.1).toFixed(1),
    },
    {
      label: `After ${formatDateShort(d7)} 11:00 PM & Before ${formatDateShort(d3)} 11:00 PM`,
      percent: 20,
      amount: (price * 0.2).toFixed(1),
    },
    {
      label: `After ${formatDateShort(d3)} 11:00 PM & Before ${formatDateShort(d1)} 11:00 PM`,
      percent: 50,
      amount: (price * 0.5).toFixed(1),
    },
    {
      label: `After ${formatDateShort(d1)} 11:00 PM & Before ${formatDateShort(journeyDate)} 11:00 AM`,
      percent: 50,
      amount: (price * 0.5).toFixed(1),
    },
    {
      label: `After ${formatDateShort(journeyDate)} 11:00 AM & Before ${formatDateShort(journeyDate)} 11:00 PM`,
      percent: 100,
      amount: (price * 1.0).toFixed(1),
    },
  ];

  return tiers;
};

const BusTicketTemplate = ({ ticketData }) => {
  if (!ticketData) return null;

  const {
    passengerName, passengerAge, passengerGender,
    fromCity, toCity,
    journeyDate, journeyTime, droppingDate, droppingTime,
    travelsName, busType, travelsPhone,
    ticketPrice, savingsAmount,
    ticketNumber, pnrNumber,
    boardingAddress, boardingLandmark, boardingPhone1, boardingPhone2,
    droppingAddress, seatNumber,
  } = ticketData;

  const cancellationTiers = getCancellationPolicy(journeyDate, journeyTime, ticketPrice);

  return (
    <div className="bus-ticket-wrapper">
      {/* ===== PAGE 1 - Ticket Info ===== */}
      <div className="bus-ticket-page">
        {/* Red Header */}
        <div className="bt-header">
          <div className="bt-header-top">
            <img src={redbusLogo} alt="redBus" className="bt-logo" />
            <div className="bt-header-info">
              <h4 className="bt-header-title">Ticket Information</h4>
              <p className="bt-header-route">
                {fromCity}-{toCity} on {formatDateLong(journeyDate)}
              </p>
            </div>
          </div>
          <div className="bt-header-bottom">
            <span>
              Ticket Number: <strong>{ticketNumber}</strong>
            </span>
            <span className="bt-header-sep">|</span>
            <span>
              PNR No: <strong>{pnrNumber}</strong>
            </span>
          </div>
        </div>

        {/* Greeting */}
        <div className="bt-greeting">
          <p>Hey {passengerName},</p>
          <p className="bt-savings">
            Hurray!! You have saved Rs {savingsAmount} on this booking
          </p>
        </div>

        {/* Save paper banner */}
        <div className="bt-save-paper">
          <div className="bt-save-paper-icon">🌿</div>
          <div>
            <strong>Save paper, save environment</strong>
            <span style={{ fontSize: "10px", opacity: 0.9 }}>
              redBus Users save on average 450 trees every month by not printing
              the ticket.
            </span>
          </div>
        </div>

        {/* Ticket Details Box */}
        <div className="bt-details-box">
          <div className="bt-details-header">
            <strong>Ticket Details</strong>
          </div>

          <div className="bt-section">
            <p className="bt-label">Journey Date and Time</p>
            <div className="bt-value-row">
              <span className="bt-icon">📅</span>
              <strong>
                {formatDate(journeyDate)}, {formatTime12(journeyTime)}
              </strong>
            </div>
          </div>

          <div className="bt-section">
            <p className="bt-label">Travels</p>
            <div className="bt-value-row">
              <span className="bt-icon">🚌</span>
              <div>
                <strong>{travelsName}</strong>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  {busType}
                </span>
              </div>
            </div>
            <p className="bt-phone">{travelsPhone}</p>
          </div>

          <div className="bt-section">
            <p className="bt-label">Ticket Price</p>
            <div className="bt-value-row">
              <span className="bt-icon">🎫</span>
              <div>
                <strong>Rs. {ticketPrice}</strong>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  (inclusive of GST)
                </span>
              </div>
            </div>
          </div>

          <div className="bt-section">
            <p className="bt-label">Boarding Point</p>
            <div className="bt-value-row">
              <span className="bt-icon" style={{ color: "#d44" }}>📍</span>
              <div>
                <strong>{fromCity}</strong>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  {boardingAddress}
                </span>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  {boardingLandmark}
                </span>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  Landmark: {boardingLandmark}
                </span>
              </div>
            </div>
            <p className="bt-phone">{boardingPhone1}</p>
            <p className="bt-phone">{boardingPhone2}</p>
          </div>

          <div className="bt-section">
            <p className="bt-label">Dropping Point</p>
            <div className="bt-value-row">
              <span className="bt-icon" style={{ color: "#d44" }}>📍</span>
              <div>
                <strong>{toCity}</strong>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  {droppingAddress}
                </span>
                <br />
                <span style={{ color: "#888", fontSize: "11px" }}>
                  DROPPING DATE &amp; TIME:
                </span>
                <br />
                <strong style={{ fontSize: "12px" }}>
                  {formatDate(droppingDate)}, {formatTime12(droppingTime)}
                </strong>
              </div>
            </div>
          </div>

          <div className="bt-section bt-passenger-section">
            <div className="bt-passenger-left">
              <p className="bt-label">Passenger Details</p>
              <div className="bt-value-row">
                <span className="bt-icon" style={{ color: "#d44" }}>👤</span>
                <div>
                  <strong>{passengerName}</strong>
                  <br />
                  <span style={{ color: "#888", fontSize: "11px" }}>
                    {passengerAge}Yrs, {passengerGender}
                  </span>
                </div>
              </div>
            </div>
            <div className="bt-passenger-right">
              <p className="bt-label">Seat no</p>
              <strong>{seatNumber}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="bt-banner-container">
        <img src={bannerImg} />
      </div>

      {/* Black separator */}
      <div className="bt-page-separator"></div>

      {/* ===== PAGE 2 - Cancellation Policy ===== */}
      <div className="bus-ticket-page" style={{ paddingTop: "30px" }}>
        <div className="bt-details-box">
          <div className="bt-details-header">
            <strong>Cancellation policy</strong>
          </div>
          <div className="bt-cancel-body">
            <p style={{ color: "#555", marginBottom: "18px", fontSize: "13px" }}>
              Your current cancellation charges according to the cancellation
              policy is highlighted below
            </p>
            <table className="bt-cancel-table">
              <thead>
                <tr>
                  <th>Cancellation time</th>
                  <th>Cancellation charges</th>
                </tr>
              </thead>
              <tbody>
                {cancellationTiers.map((tier, i) => (
                  <tr key={i}>
                    <td>{tier.label}</td>
                    <td>
                      <strong>
                        Rs. {tier.amount}({tier.percent}%)
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="bt-cancel-notes">
              <li>Cancellation charges are computed on per seat basis.</li>
              <li>
                For Group bookings, cancellation of individual seats is not
                allowed.
              </li>
              <li>
                Note: Cancellation charges mentioned above are excluding GST.
              </li>
            </ul>
            <div className="bt-how-to-cancel">
              <strong>How to cancel your ticket on redbus app</strong>
              <p>
                Go to my bookings and choose the journey and cancel the ticket
              </p>
            </div>
          </div>
        </div>

        {/* redBuddy support */}
        <div className="bt-redbuddy">
          <div className="bt-redbuddy-header">
            <span className="bt-redbuddy-icon">💬</span>
            <span>
              Need help?{" "}
              <span style={{ color: "#d63333" }}>redBuddy</span> is here for
              you!
            </span>
          </div>
          <div className="bt-redbuddy-features">
            <span>🕐 24x7 support</span>
            <span>⚡ Quick Resolution</span>
            <span>🌐 Multilingual</span>
          </div>
          <div style={{ textAlign: "left" }}>
            <button className="bt-chat-btn">CHAT WITH REDBUDDY</button>
          </div>
        </div>
      </div>

      {/* Black separator */}
      <div className="bt-page-separator"></div>

      {/* ===== PAGE 3 - Terms and Conditions ===== */}
      <div className="bus-ticket-page" style={{ paddingTop: "30px" }}>
        <div className="bt-terms-box">
          <div className="bt-terms-header">Terms and conditions</div>
          <div className="bt-terms-body">
            <ol className="bt-terms-list">
              <li>
                <p>
                  redBus* is an online ticketing platform. It does not operate
                  bus services of its own. In order to provide a comprehensive
                  choice of bus operators, departure times and prices to
                  customers, it has tied up with many bus operators.
                </p>
                <p>
                  <strong>redBus responsibilities include:</strong>
                </p>
                <p style={{ paddingLeft: "8px" }}>
                  (1) Issuing a valid ticket (a ticket that will be accepted by
                  the bus operator) for its network of bus operators
                  <br />
                  (2) Providing refund and support in the event of cancellation
                  <br />
                  (3) Providing customer support and information in case of any
                  delays / inconvenience
                </p>
                <p>
                  <strong>redBus responsibilities do not include:</strong>
                </p>
                <p style={{ paddingLeft: "8px" }}>
                  (1) The bus operator's bus not departing / reaching on time.
                  <br />
                  (2) The bus operator's employees being rude.
                  <br />
                  (3) The bus operator's bus seats etc not being up to the
                  customer's expectation.
                  <br />
                  (4) The bus operator canceling the trip due to unavoidable
                  reasons.
                  <br />
                  (5) The baggage of the customer getting lost / stolen /
                  damaged.
                  <br />
                  (6) The bus operator changing a customer's seat at the last
                  minute to accommodate a lady / child.
                  <br />
                  (7) The customer waiting at the wrong boarding point (please
                  call the bus operator to find out the exact boarding point if
                  you are not a regular traveler on that particular bus).
                  <br />
                  (8) The bus operator changing the boarding point and/or using a
                  pick-up vehicle at the boarding point to take customers to the
                  bus departure point.
                </p>
              </li>
              <li>
                The departure time mentioned on the ticket are only tentative
                timings. However the bus will not leave the source before the
                time that is mentioned on the ticket.
              </li>
              <li>
                <p>
                  Passengers are required to furnish the following at the time of
                  boarding the bus:
                </p>
                <p style={{ paddingLeft: "8px" }}>
                  (1) A digital copy of the e-ticket or m-ticket.
                  <br />
                  (2) A valid identity proof
                </p>
                <p>
                  Failing to do so, they may not be allowed to board the bus.
                </p>
              </li>
              <li>
                Change of bus: In case the bus operator changes the type of bus
                due to some reason, redBus will refund the differential amount to
                the customer upon being intimated by the customers in 24 hours of
                the journey.
              </li>
              <li>
                Amenities for this bus as shown on redBus have been configured
                and provided by the bus provider (bus operator). These amenities
                will be provided unless there are some exceptions on certain
                days. Please note that redBus provides this information in good
                faith to help passengers to make an informed decision. The
                liability of the amenity not being made available lies with the
                operator and not with redBus.
              </li>
              <li>
                In case a booking confirmation e-mail and sms gets delayed or
                fails because of technical reasons or as a result of incorrect
                e-mail ID / phone number provided by the user etc, a ticket will
                be considered 'booked' as long as the ticket shows up on the
                confirmation page of{" "}
                <a href="https://www.redBus.in" style={{ color: "#1a5fb4" }}>
                  www.redBus.in
                </a>
              </li>
              <li>
                Grievances and claims related to the bus journey should be
                reported to redBus support team within 7 days of your Travel
                date.
              </li>
              <li>
                Cancellation of this ticket is <strong>NOT</strong> allowed after
                bus departure time.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusTicketTemplate;
