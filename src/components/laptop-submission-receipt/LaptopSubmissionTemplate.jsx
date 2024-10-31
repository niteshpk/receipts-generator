import { useState, useEffect } from "react";

const tableHead = {
  border: "1px solid #000",
  padding: "4px",
  textAlign: "center",
  backgroundColor: "#4472c4",
  color: "#fff",
};

const tableCell = {
  border: "1px solid #000",
  padding: "4px",
  textAlign: "center",
};

const table = {
  width: "95%",
  marginTop: "20px",
  borderCollapse: "collapse",
  margin: "0 auto",
};

const container = {
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ddd",
};

const body = {
  fontFamily: "'Arial', sans-serif",
  color: "#000000",
  margin: 0,
  padding: "20px",
  lineHeight: 1.6,
  fontSize: "15px",
};

const signLine = { width: "65%", textAlign: "right" };

const LaptopSubmissionTemplate = ({ receiptData }) => {
  const [acceseries, setAcceseries] = useState([]);

  if (!receiptData) return null;

  useEffect(() => {
    const { acceseries } = receiptData;
    setAcceseries(acceseries);
  }, [receiptData]);

  return (
    <div style={body}>
      <div style={container}>
        <h5 className="text-center">Laptop Issuance Form</h5>
        <br />

        <div className="d-flex justify-content-between align-items-center">
          <p>
            <strong>Issued to:</strong> {receiptData.candidateName}
          </p>
          <p>
            <strong>Date of issue:</strong> {receiptData.dateOfIssue}
          </p>
        </div>
        <p>
          <strong>Company:</strong> {receiptData.companyFullName}
        </p>
        <br />

        <p>You are being issued the following laptop:</p>

        <table style={table}>
          <thead>
            <tr>
              <th style={tableHead}>Asset Name</th>
              <th style={tableHead}>Asset</th>
              <th style={tableHead}>Make</th>
              <th style={tableHead}>Model</th>
              <th style={tableHead}>Serial Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCell}>{receiptData.laptop.assetName}</td>
              <td style={tableCell}>{receiptData.laptop.asset}</td>
              <td style={tableCell}>{receiptData.laptop.make}</td>
              <td style={tableCell}>{receiptData.laptop.model}</td>
              <td style={tableCell}>{receiptData.laptop.serialNumber}</td>
            </tr>
          </tbody>
        </table>
        <br />

        <p>And the following accessories (if any):</p>

        <table style={table}>
          <thead>
            <tr>
              <th style={tableHead}>Asset Name</th>
              <th style={tableHead}>Make</th>
              <th style={tableHead}>Model</th>
              <th style={tableHead}>Serial Number</th>
            </tr>
          </thead>
          <tbody>
            {acceseries.map((acc) => (
              <tr key={acc.id}>
                <td style={tableCell}>{acc.assetName}</td>
                <td style={tableCell}>{acc.make}</td>
                <td style={tableCell}>{acc.model}</td>
                <td style={tableCell}>{acc.serialNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />

        <div
          dangerouslySetInnerHTML={{ __html: receiptData.termsAndConditions }}
        ></div>

        <div>
          <div style={signLine}>Employee Signature:</div>
          <div style={signLine}>Date:</div>
        </div>
      </div>
    </div>
  );
};

export default LaptopSubmissionTemplate;
