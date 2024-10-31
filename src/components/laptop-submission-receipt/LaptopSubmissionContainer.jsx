import { useState, useRef, useEffect } from "react";
import LaptopSubmissionForm from "./LaptopSubmissionForm";
import LaptopSubmissionReceiptToPrint from "./LaptopSubmissionReceiptToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import { termsAndConditions } from "./termsAndConditions";

const today = new Date();

const assetObj = {
  id: 0,
  assetName: "",
  make: "",
  model: "",
  serialNumber: "",
};

const user = {
  dateOfIssue: `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`,
  candidateName: "",
  companyShortName: "Codeblaze",
  companyFullName: "Codeblaze Solutions Private Limited",
  termsAndConditions,
};

const laptop = {
  ...assetObj,
  assetName: "Laptop",
  asset: "CDBLZ-NB-0",
  make: "",
  model: "",
  serialNumber: "",
};

const acceseries = [
  {
    ...assetObj,
    id: 1,
    assetName: "",
    make: "",
    model: "",
    serialNumber: "",
  },
];

const LaptopSubmissionContainer = () => {
  const componentRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [receiptData, setReceiptData] = useState({
    ...user,
    laptop: { ...laptop },
    acceseries: [...acceseries],
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

  if (!receiptData) return null;

  useEffect(() => {
    const {
      dateOfIssue,
      candidateName,
      companyShortName,
      companyFullName,
      laptop: {
        assetName: laptopAssetName,
        asset: laptopAsset,
        make: laptopMake,
        model: laptopModel,
        serialNumber: laptopSerialNumber,
      },
      acceseries: {
        0: {
          assetName: headPhoneAssetName,
          make: headPhoneMake,
          model: headPhoneModel,
          serialNumber: headPhoneSerialNumber,
        },
      },
    } = receiptData;

    if (
      dateOfIssue &&
      candidateName &&
      companyShortName &&
      companyFullName &&
      laptopAssetName &&
      laptopAsset &&
      laptopMake &&
      laptopModel &&
      laptopSerialNumber &&
      headPhoneAssetName &&
      headPhoneMake &&
      headPhoneModel &&
      headPhoneSerialNumber
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }

    setFileName(
      `${receiptData.laptop.asset?.trim()}_${receiptData.candidateName.trim()}`
    );
  }, [receiptData]);

  useEffect(() => handleTemplateVariableChanges(receiptData), []);

  const handleTemplateVariableChanges = (data) => {
    setReceiptData({
      ...data,
      termsAndConditions: termsAndConditions
        .replace(/_COMPANY_SHORT_NAME_/g, data.companyShortName)
        .replace(/_COMPANY_FULL_NAME_/g, data.companyFullName),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      dateOfIssue,
      candidateName,
      companyShortName,
      companyFullName,
      laptop: {
        assetName: laptopAssetName,
        asset: laptopAsset,
        make: laptopMake,
        model: laptopModel,
        serialNumber: laptopSerialNumber,
      },
      acceseries: {
        0: {
          assetName: headPhoneAssetName,
          make: headPhoneMake,
          model: headPhoneModel,
          serialNumber: headPhoneSerialNumber,
        },
      },
    } = receiptData;

    if (
      (!dateOfIssue || !candidateName || !companyShortName,
      !companyFullName,
      !laptopAssetName ||
        !laptopAsset ||
        !laptopMake ||
        !laptopModel ||
        !laptopSerialNumber ||
        !headPhoneAssetName ||
        !headPhoneMake ||
        !headPhoneModel ||
        !headPhoneSerialNumber)
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    setSubmitted(true);
  };

  const addRow = () => {
    setReceiptData({
      ...receiptData,
      acceseries: [...receiptData.acceseries, { ...assetObj, id: Date.now() }],
    });
  };

  return (
    <div className="container">
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <p className="h5 text-center my-3 text-muted">
            Laptop Submission Form
          </p>

          <div className="row">
            <div className="col-12 offset-md-1 col-md-10 my-3">
              <LaptopSubmissionForm
                receiptData={receiptData}
                setReceiptData={setReceiptData}
                addRow={addRow}
                handleTemplateVariableChanges={handleTemplateVariableChanges}
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary ms-3"
                  disabled={disableSubmit}
                >
                  Submit
                </button>
                <Link to="/" className="btn btn-outline-dark ms-3">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </form>
      )}

      {!!submitted && (
        <div className="my-3 ">
          <p className="h5 text-center mb-0 text-muted">
            Laptop Submission Form Preview
          </p>
          <LaptopSubmissionReceiptToPrint
            ref={componentRef}
            receiptData={receiptData}
            addRow={addRow}
          />
          <div className="d-flex justify-content-center align-items-center ">
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-primary">Print/Export to PDF</button>
              )}
              content={() => componentRef.current}
              documentTitle={`${fileName}.pdf`}
            />
            <button
              className="btn btn-outline-dark ms-2"
              onClick={() => setSubmitted(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopSubmissionContainer;
