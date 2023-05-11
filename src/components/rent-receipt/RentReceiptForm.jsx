const data = {
  receiptNo: "1",
  receiptDate: "May 2023",
  rentAmount: "8300",
  tenantName: "Nitesh Prakash Kesarkar",
  fullAddress:
    "Flat No 1106, Siddhivinayak Heights, Sadguru Society, Jambhulwadi Road, Ambegao Khurd, Pune 411046",
  fromDate: "May 1, 2023",
  toDate: "May 30, 2023",
  landlordName: "Rakesh Shankar Patil",
  landlordPAN: "ABCDE1234F",
  showStamp: false,
};

const RentReceiptForm = ({ receiptData, setReceiptData }) => {
  return (
    <div className="card mt-2 mb-5">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-1">
              <div className="mb-3">
                <label htmlFor="receiptNo" className="form-label">
                  Sr No
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="receiptDate" className="form-label">
                  Receipt Date
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>

            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="rentAmount" className="form-label">
                  Rent Amount
                </label>
                <input
                  type="number"
                  className="form-control"
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
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="fromDate" className="form-label">
                  From Date
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="toDate" className="form-label">
                  To Date
                </label>
                <input
                  type="text"
                  className="form-control"
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
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="tenantName" className="form-label">
                  Tenant Name
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="landlordName" className="form-label">
                  Landlord Name
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="landlordPAN" className="form-label">
                  Landlord PAN
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>

            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="fullAddress" className="form-label">
                  Full Address
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="fullAddress"
                  rows={3}
                  value={receiptData?.fullAddress}
                  placeholder={data.fullAddress}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      fullAddress: e.target.value,
                    })
                  }
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

export default RentReceiptForm;
