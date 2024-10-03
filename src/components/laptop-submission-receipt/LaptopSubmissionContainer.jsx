import { useState, useRef, useEffect } from "react";
import LaptopSubmissionForm from "./LaptopSubmissionForm";
import LaptopSubmissionReceiptToPrint from "./LaptopSubmissionReceiptToPrint";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";

const assetObj = {
  id: 0,
  assetName: "",
  asset: "",
  make: "",
  model: "",
  serialNumber: "",
};

// const user = {
//   dateOfIssue: "",
//   candidateName: "",
//   companyShortName: "",
//   companyFullName: "",
//   termsAndConditions: "",
// };

// const laptop = {
//   ...assetObj,
//   assetName: "",
//   asset: "",
//   make: "",
//   model: "",
//   serialNumber: "",
// };

// const acceseries = [
//   {
//     ...assetObj,
//     id: 1,
//     assetName: "",
//     asset: "",
//     make: "",
//     model: "",
//     serialNumber: "",
//   },
// ];

const user = {
  dateOfIssue: "31/08/2023",
  candidateName: "Nitesh Kesarkar",
  companyShortName: "Codeblaze",
  companyFullName: "Codeblaze Solutions Pvt Ltd",
  termsAndConditions: "test",
};

const laptop = {
  ...assetObj,
  assetName: "CDBLZ-NB-008",
  asset: "Laptop",
  make: "Lenovo",
  model: "Yoga Pro 7 Slim",
  serialNumber: "PF3XZ8J0",
};

const acceseries = [
  {
    ...assetObj,
    id: 1,
    assetName: "HP",
    asset: "Headphone",
    make: "Poly",
    model: "V4320-M USB-A",
    serialNumber: "FJBP0M",
  },
];

const LaptopSubmissionContainer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState({
    ...user,
    laptop: { ...laptop },
    acceseries: [...acceseries],
  });

  const [disableSubmit, setDisableSubmit] = useState(true);
  const componentRef = useRef();

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
          asset: headPhoneAsset,
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
      headPhoneAsset &&
      headPhoneMake &&
      headPhoneModel &&
      headPhoneSerialNumber
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [receiptData]);

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
          asset: headPhoneAsset,
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
        !headPhoneAsset ||
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
                termsAndConditions={user.termsAndConditions}
                addRow={addRow}
              />

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-dark ms-2"
                  onClick={() => {
                    setReceiptData({
                      ...receiptData,
                      termsAndConditions: receiptData.termsAndConditions
                        .replace(
                          /COMPANY_SHORT_NAME/g,
                          receiptData.companyShortName
                        )
                        .replace(
                          /COMPANY_FULL_NAME/g,
                          receiptData.companyFullName
                        ),
                    });
                  }}
                >
                  Update Template
                </button>

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
