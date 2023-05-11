const WifiReceiptTemplate = ({ receiptData }) => {
  if (!receiptData) return null;

  const {
    receiptNo,
    transactionDate,
    amount,
    transactionId,
    accountNo,
    bankReferenceNo,
    invoiceNo,
    serviceProvider,
    tagLine,
    note,
  } = receiptData;

  return (
    <div className="d-flex align-items-center justify-content-center mb-5">
      <div className="container receipt-template mt-5 ">
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <h2>{serviceProvider}</h2>

          <p>{tagLine}</p>
          <hr className="m-0 w-50" />

          <div className="alert alert-success my-3 " role="alert">
            <b>Success!</b> {`Your payment of Rs. ${amount}/- is successful.`}
          </div>

          <div className="header mt-3 ">
            <h5 className="pb-1 rent-receipt-title">Receipt Details</h5>
          </div>

          <table class="table my-3 " style={{ width: "70%" }}>
            <tbody>
              <tr>
                <th class="text-end">Receipt No</th>
                <td class=""> : </td>
                <td class="text-start">{receiptNo}</td>
              </tr>
              <tr>
                <th class="text-end">Transaction ID </th>
                <td class=""> : </td>
                <td class="text-start">{transactionId}</td>
              </tr>
              <tr>
                <th class="text-end">Transaction Date</th>
                <td class=""> : </td>
                <td class="text-start">{transactionDate}</td>
              </tr>
              <tr>
                <th class="text-end">Amount</th>
                <td class=""> : </td>
                <td class="text-start">{amount}</td>
              </tr>
              <tr>
                <th class="text-end">Account No</th>
                <td class=""> : </td>
                <td class="text-start">{accountNo}</td>
              </tr>
              <tr>
                <th class="text-end">Bank Reference No</th>
                <td class=""> : </td>
                <td class="text-start">{bankReferenceNo}</td>
              </tr>
              <tr>
                <th class="text-end">Invoice No</th>
                <td class=""> : </td>
                <td class="text-start">{invoiceNo}</td>
              </tr>
            </tbody>
          </table>

          <small className="my-3">{note}</small>
        </div>
      </div>
    </div>
  );
};

export default WifiReceiptTemplate;
