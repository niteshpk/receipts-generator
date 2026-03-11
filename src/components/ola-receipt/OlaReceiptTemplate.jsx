import olaLogo from "../../assets/ola-logo.png";

const formatDateDisplay = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]}, ${d.getFullYear()}`;
};

const formatTime12 = (timeStr) => {
  if (!timeStr) return "";
  const [h, m] = timeStr.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${String(hour12).padStart(2, "0")}:${m} ${ampm}`;
};

const getMapEmbedUrl = (pickupLat, pickupLng, dropLat, dropLng) => {
  if (!pickupLat || !pickupLng || !dropLat || !dropLng) return "";
  const minLat = Math.min(parseFloat(pickupLat), parseFloat(dropLat));
  const maxLat = Math.max(parseFloat(pickupLat), parseFloat(dropLat));
  const minLng = Math.min(parseFloat(pickupLng), parseFloat(dropLng));
  const maxLng = Math.max(parseFloat(pickupLng), parseFloat(dropLng));
  const pad = 0.02;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLng - pad},${minLat - pad},${maxLng + pad},${maxLat + pad}&layer=mapnik&marker=${pickupLat},${pickupLng}`;
};

const OlaReceiptTemplate = ({ receiptData }) => {
  if (!receiptData) return null;

  const {
    customerName, rideDate, crnNumber,
    driverName, carType,
    travelDistance, travelTimeHrs, travelTimeMins,
    pickupTime, pickupAddress, dropTime, dropAddress,
    pickupLat, pickupLng, dropLat, dropLng,
    rideFare, convenienceFees, paymentMethod,
    invoiceId, mobileNumber,
  } = receiptData;

  const fare = parseFloat(rideFare) || 0;
  const fees = parseFloat(convenienceFees) || 0;
  const totalBill = Math.round(fare + fees);
  const cgst = (fees * 0.09).toFixed(2);
  const sgst = (fees * 0.09).toFixed(2);
  const invoiceTotal = (fees + parseFloat(cgst) + parseFloat(sgst)).toFixed(2);

  const formatInvoiceDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const hrs = parseInt(travelTimeHrs) || 0;
  const mins = parseInt(travelTimeMins) || 0;
  const totalMins = hrs * 60 + mins;
  const exceedHours = totalMins > 60 ? (totalMins / 60).toFixed(1) : null;

  const travelTimeDisplay =
    hrs > 0 ? `${hrs}hr ${mins}min` : `${mins}min`;

  const mapEmbedUrl = getMapEmbedUrl(pickupLat, pickupLng, dropLat, dropLng);

  return (
    <div className="ola-receipt-wrapper">
      <div className="ola-receipt">
        {/* Top bar */}
        <div className="ola-topbar">
          <span className="ola-date">{formatDateDisplay(rideDate)}</span>
          <img src={olaLogo} alt="OLA" className="ola-logo" />
        </div>

        {/* Big amount */}
        <div className="ola-amount-section">
          <div className="ola-big-amount">₹{totalBill}</div>
          <div className="ola-crn">
            <span className="ola-crn-line"></span>
            <span className="ola-crn-text">{crnNumber}</span>
            <span className="ola-crn-line"></span>
          </div>
          <div className="ola-thanks">
            Thanks for travelling with us, {customerName}
          </div>
        </div>

        {/* Two-column: Ride Details + Bill Details */}
        <div className="ola-main-content">
          <div className="ola-left-col">
            <h3 className="ola-section-title">Ride Details</h3>
            {/* Map */}
            <div className="ola-map-container">
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  className="ola-map-iframe"
                  title="Route Map"
                  frameBorder="0"
                  scrolling="no"
                />
              ) : (
                <div className="ola-map-placeholder">Map preview</div>
              )}
            </div>

            {/* Driver */}
            <div className="ola-driver-row">
              <span className="ola-driver-icon">🚕</span>
              <span className="ola-driver-name">{driverName}</span>
            </div>

            {/* Distance & Time */}
            <div className="ola-travel-stats">
              <span className="ola-stats-icon">⏱</span>
              <div>
                <div>
                  <strong>Actual Travel Distance</strong>{" "}
                  <span>{travelDistance} km</span>
                </div>
                <div>
                  <strong>Actual Travel Time</strong>{" "}
                  <span>{travelTimeDisplay}</span>
                </div>
                <div className="ola-distance-note">
                  Distance till destination city included
                </div>
              </div>
            </div>

            {/* Car type */}
            <div className="ola-car-row">
              <span className="ola-car-icon">🚗</span>
              <span>{carType}</span>
            </div>
          </div>

          <div className="ola-right-col">
            <h3 className="ola-section-title">Bill Details</h3>
            <div className="ola-bill-table">
              <div className="ola-bill-row ola-bill-row-bordered">
                <span>Ride Fare</span>
                <span className="ola-bill-amount">₹{parseFloat(rideFare).toFixed(2)}</span>
              </div>
              <div className="ola-bill-row">
                <span>Convenience Fees</span>
                <span className="ola-bill-amount">₹{parseFloat(convenienceFees).toFixed(2)}</span>
              </div>
              <div className="ola-bill-row ola-bill-total">
                <span>
                  <strong>Total Bill</strong> <span className="ola-rounded">(rounded)</span>
                </span>
                <span className="ola-bill-amount ola-bill-total-amount">₹{totalBill}</span>
              </div>
            </div>

            {exceedHours && (
              <p className="ola-exceed-note">
                *For trip exceeding {exceedHours} hour
              </p>
            )}

            <p className="ola-queries">
              Have queries? Visit <a href="#">support for this ride</a>.
            </p>

            <p className="ola-disclaimer">
              * This document is issued at the passenger's request for reference
              purposes only and may be used for reimbursement or official
              documentation as applicable.
            </p>

            <p className="ola-note">
              Note: Price here is "Selected Price" which denotes fare mutually
              agreed upon by the user and the driver, selected from within a
              system-generated estimated price range.
            </p>
          </div>
        </div>

        {/* One-way Trip */}
        <div className="ola-trip-section">
          <h3 className="ola-trip-heading">One-way Trip</h3>
          <div className="ola-trip-timeline">
            <div className="ola-trip-stop">
              <span className="ola-trip-time">{formatTime12(pickupTime)}</span>
              <div className="ola-trip-dot-col">
                <span className="ola-dot ola-dot-green"></span>
                <span className="ola-dot-line"></span>
              </div>
              <span className="ola-trip-address">{pickupAddress}</span>
            </div>
            <div className="ola-trip-stop">
              <span className="ola-trip-time">{formatTime12(dropTime)}</span>
              <div className="ola-trip-dot-col">
                <span className="ola-dot ola-dot-red"></span>
              </div>
              <span className="ola-trip-address">{dropAddress}</span>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="ola-payment-section">
          <h3 className="ola-payment-heading">Payment</h3>
          <div className="ola-payment-row">
            <div className="ola-payment-left">
              <span className="ola-payment-icon">💳</span>
              <span>Paid by {paymentMethod}</span>
            </div>
            <span className="ola-payment-amount">₹{totalBill}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="ola-footer">
          <p className="ola-footer-grievance">
            In case of any complaint/grievance against this receipt, write to us at
          </p>
          <p className="ola-footer-address">
            Grievance officer, ANI Technologies Private Limited, Ola Campus,
            Prestige RMZ star tech, C wing, Koramangala Industrial
          </p>
        </div>

        <div className="ola-footer-bar">
          <span>
            layout, Koramangala, Hosur road, Bengaluru, Karnataka, 560095
          </span>
        </div>
      </div>

      {/* ===== PAGE 2 - Original Tax Invoice ===== */}
      <div className="ola-invoice" style={{ marginTop: "24px" }}>
        <h2 className="ola-inv-title">Original Tax Invoice</h2>

        <div className="ola-inv-header">
          <div className="ola-inv-left">
            <img src={olaLogo} alt="OLA" className="ola-inv-logo" />
            <div className="ola-inv-company">
              <strong>ANI Technologies Pvt. Ltd.</strong>
              <br />
              Gala No. 07, Ground floor, Amfotech Park, Plot
              No - A/ 26, Road No. B-8, Wagle Ind. Estate,
              Thane West-400604
            </div>
          </div>
          <div className="ola-inv-right">
            <div>State GSTIN: <strong>27AAJCA1389G1ZJ</strong></div>
            <div>SAC Code: <strong>999799</strong></div>
            <div>Service Tax Category: <strong>Business Auxiliary</strong></div>
            <div style={{ textAlign: "right" }}><strong>Service</strong></div>
          </div>
        </div>

        <div className="ola-inv-row">
          <div>
            <span className="ola-inv-label">Invoice ID</span>{" "}
            <strong>{invoiceId}</strong>
          </div>
          <div>
            <span className="ola-inv-label">Invoice Date</span>{" "}
            <strong>{formatInvoiceDate(rideDate)}</strong>
          </div>
        </div>

        <div className="ola-inv-row">
          <div>
            <span className="ola-inv-label">Customer Name</span>{" "}
            <strong>{customerName}</strong>
          </div>
          <div>
            <span className="ola-inv-label">Mobile Number</span>{" "}
            <strong>{mobileNumber}</strong>
          </div>
        </div>

        <div className="ola-inv-supply">
          <span className="ola-inv-label">Supply Address</span>{" "}
          Gala No. 07, Ground floor, Amfotech Park,
          Plot No - A/ 26, Road No. B-8, Wagle Ind. Estate, Thane
          West-400604
        </div>

        {/* Description table */}
        <div className="ola-inv-desc-header">
          <span><strong>Description</strong></span>
          <span><strong>Amount (INR)</strong></span>
        </div>
        <div className="ola-inv-dashed"></div>

        <div className="ola-inv-ride-num">
          <strong>Ola Ride Number - {crnNumber}</strong>
        </div>

        <div className="ola-inv-line-item">
          <span>Convenience Fees</span>
          <span>₹{parseFloat(convenienceFees).toFixed(2)}</span>
        </div>

        <div className="ola-inv-line-item">
          <div>
            <div><strong>CGST</strong></div>
            <div className="ola-inv-tax-pct">9.0%</div>
          </div>
          <span>₹{cgst}</span>
        </div>

        <div className="ola-inv-line-item">
          <div>
            <div><strong>SGST</strong></div>
            <div className="ola-inv-tax-pct">9.0%</div>
          </div>
          <span>₹{sgst}</span>
        </div>

        <div className="ola-inv-total-row">
          <div>
            <strong>Total</strong>
            <br />
            <span className="ola-inv-total-value">Total value</span>
          </div>
          <span className="ola-inv-total-amount">₹{invoiceTotal}</span>
        </div>

        {/* Payment Details */}
        <div className="ola-inv-payment">
          <strong>Payment Details</strong>
          <div className="ola-inv-pay-grid">
            <span className="ola-inv-label">Paid by</span>
            <span>{paymentMethod}</span>
            <span className="ola-inv-label">Transaction date</span>
            <span>{formatDateDisplay(rideDate)} {formatTime12(dropTime)}</span>
            <span className="ola-inv-label">Amount</span>
            <span>₹{invoiceTotal}</span>
          </div>
        </div>

        <div className="ola-inv-notes">
          <div className="ola-inv-notes-title">Please note:</div>
          <ol>
            <li>
              This is an electronically generated invoice and subject to
              deduction of applicable taxes under the applicable GST law.
            </li>
            <li>
              Vide Circular No. 146/02/2021- GST dated 23rd February 2021,
              Printing of Dynamic QR code is not mandatory.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OlaReceiptTemplate;
