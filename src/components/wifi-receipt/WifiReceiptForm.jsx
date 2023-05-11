const data = {
  receiptNo: "Enter Receipt No",
  transactionDate: "Enter Transaction Date",
  amount: "Enter Transaction Amount",
  transactionId: "Enter Transaction ID",
  accountNo: "Enter Account No",
  bankReferenceNo: "Enter Bank Reference No",
  invoiceNo: "Enter Invoice No",
  serviceProvider: "Enter Service Provider",
  tagLine: "Enter Tag Line",
  note: "Enter Note",
};

const WifiReceiptForm = ({ receiptData, setReceiptData }) => {
  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="mb-3">
                <label htmlFor="serviceProvider" className="form-label">
                  Service Provider
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="serviceProvider"
                  value={receiptData?.serviceProvider}
                  placeholder={data.serviceProvider}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      serviceProvider: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="mb-3">
                <label htmlFor="tagLine" className="form-label">
                  Tag Line
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tagLine"
                  value={receiptData?.tagLine}
                  placeholder={data.tagLine}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      tagLine: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label htmlFor="receiptNo" className="form-label">
                  Receipt No
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

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="transactionDate" className="form-label">
                  Transaction Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionDate"
                  value={receiptData?.transactionDate}
                  placeholder={data.transactionDate}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      transactionDate: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="transactionId" className="form-label">
                  Transaction ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionId"
                  value={receiptData?.transactionId}
                  placeholder={data.transactionId}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      transactionId: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  value={receiptData?.amount}
                  placeholder={data.amount}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      amount: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="accountNo" className="form-label">
                  Account No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="accountNo"
                  value={receiptData?.accountNo}
                  placeholder={data.accountNo}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      accountNo: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="bankReferenceNo" className="form-label">
                  Bank Reference No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bankReferenceNo"
                  value={receiptData?.bankReferenceNo}
                  placeholder={data.bankReferenceNo}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      bankReferenceNo: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="invoiceNo" className="form-label">
                  Invoice No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="invoiceNo"
                  value={receiptData?.invoiceNo}
                  placeholder={data.invoiceNo}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      invoiceNo: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="note" className="form-label">
                  Note
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="note"
                  value={receiptData?.note}
                  placeholder={data.note}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      note: e.target.value,
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

export default WifiReceiptForm;
