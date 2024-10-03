import ReusableInput from "../app-input/app-input";
import ReusableTextarea from "../app-textarea/app-textarea";

const data = {
  receiptNo: "Enter Receipt No",
  receiptDate: "Enter Receipt Date",
  rentAmount: "Enter Rent Amount",
  tenantName: "Enter Tenant Name",
  fullAddress: "Enter Full Address",
  fromDate: "Enter From Date",
  toDate: "Enter To Date",
  landlordName: "Enter Landlord Name",
  landlordPAN: "Enter Landlord PAN",
  showStamp: false,
};

const RentReceiptForm = ({ receiptData, setReceiptData }) => {
  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-1">
              <ReusableInput
                label="Sr No"
                id="receiptNo"
                value={receiptData?.receiptNo}
                placeholder={data.receiptNo}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    receiptNo: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-3">
              <ReusableInput
                label="Receipt Date"
                id="receiptDate"
                value={receiptData?.receiptDate}
                placeholder={data.receiptDate}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    receiptDate: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-2">
              <ReusableInput
                label="Rent Amount"
                id="rentAmount"
                value={receiptData?.rentAmount}
                placeholder={data.rentAmount}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    rentAmount: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-3">
              <ReusableInput
                label="From Date"
                id="fromDate"
                value={receiptData?.fromDate}
                placeholder={data.fromDate}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    fromDate: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-3">
              <ReusableInput
                label="To Date"
                id="toDate"
                value={receiptData?.toDate}
                placeholder={data.toDate}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    toDate: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ReusableInput
                label="Tenant Name"
                id="tenantName"
                value={receiptData?.tenantName}
                placeholder={data.tenantName}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    tenantName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-4">
              <ReusableInput
                label="Landlord Name"
                id="landlordName"
                value={receiptData?.landlordName}
                placeholder={data.landlordName}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    landlordName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-4">
              <ReusableInput
                label="Landlord PAN"
                id="landlordPAN"
                value={receiptData?.landlordPAN}
                placeholder={data.landlordPAN}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    landlordPAN: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="col-md-12">
              <ReusableTextarea
                label="Full Address"
                id="fullAddress"
                value={receiptData?.fullAddress}
                placeholder={data.fullAddress}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    fullAddress: e.target.value,
                  })
                }
                rows={3}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentReceiptForm;
