const RentReceiptTemplate = ({ receiptData }) => {
  if (!receiptData) return null;

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
    showStamp,
  } = receiptData;

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="container receipt-template m-5 ">
        <div className="header">
          <h5 className="pb-1 rent-receipt-title">RENT RECEIPT</h5>
        </div>

        <div className="d-flex justify-content-between ">
          <div>
            <strong className="me-2">Receipt No: </strong>{" "}
            <span>{receiptNo}</span>
          </div>
          <div>
            <strong className="me-2">Date: </strong> <span>{receiptDate}</span>
          </div>
        </div>
        <div className="my-5">
          Received sum of Rs. <strong>{rentAmount}</strong> from{" "}
          <strong>{tenantName}</strong> towards the rent of property located at{" "}
          <strong>{fullAddress}</strong> for the period from{" "}
          <strong>{fromDate}</strong> to <strong>{toDate}</strong>.
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column  justify-content-center">
            <div className="d-flex">
              <span className="me-2">Landlord Name: </span>{" "}
              <strong>{landlordName}</strong>
            </div>
            <div className="d-flex">
              <span className="me-2">Landlord PAN: </span>{" "}
              <strong>{landlordPAN}</strong>
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-end">
            <div className="landlord-signature d-flex align-items-baseline">
              <span>Landlord’s Signature</span>
              {showStamp && (
                <img src="src/assets/stamp.png" className="stamp-img" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentReceiptTemplate;
