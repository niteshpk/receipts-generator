import { useEffect, useState } from "react";
import ReusableInput from "../app-input/app-input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const asset = {
  assetName: "Enter asset name",
  asset: "Enter asset",
  make: "Enter manufacturer name",
  model: "Enter model",
  serialNumber: "Enter serial number",
};

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

  dateOfIssue: "DD/MM/YYYY",
  candidateName: "Enter candidate name",
  companyShortName: "Enter company short name",
  companyFullName: "Enter company full name",
  laptop: {
    ...asset,
  },
  acceseries: {
    ...asset,
  },
  termsAndConditions: "Enter terms and conditions",
};

const LaptopSubmissionForm = ({ receiptData, setReceiptData, addRow }) => {
  const [acceseries, setAcceseries] = useState([receiptData.acceseries]);

  if (!receiptData) return null;

  useEffect(() => {
    setAcceseries(receiptData.acceseries);
  }, [receiptData]);

  const deleteRow = (id) => {
    const newAcceseries = acceseries.filter((a) => a.id !== id);

    setReceiptData({
      ...receiptData,
      acceseries: newAcceseries,
    });
  };

  const updateAccesseries = (index, obj) => {
    const newAcceseries = acceseries.map((acc, idx) => {
      if (index === idx) {
        return obj;
      }
      return acc;
    });

    setReceiptData({
      ...receiptData,
      acceseries: newAcceseries,
    });
  };

  return (
    <div className="card mt-2 mb-3">
      <div className="card-body">
        <div className="container">
          <div className="row" key={1}>
            <div className="col-12 col-md-3">
              <ReusableInput
                label="Candidate Name"
                id="candidateName"
                value={receiptData.candidateName}
                placeholder={data.candidateName}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    candidateName: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-12 col-md-3">
              <ReusableInput
                label="Company Short Name"
                id="companyShortName"
                value={receiptData.companyShortName}
                placeholder={data.companyShortName}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    companyShortName: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-12 col-md-3">
              <ReusableInput
                label="Company Full Name"
                id="companyFullName"
                value={receiptData.companyFullName}
                placeholder={data.companyFullName}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    companyFullName: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="col-12 col-md-3">
              <ReusableInput
                label="Date of Issue"
                id="dateOfIssue"
                value={receiptData.dateOfIssue}
                placeholder={data.dateOfIssue}
                onChange={(e) =>
                  setReceiptData({
                    ...receiptData,
                    dateOfIssue: e.target.value,
                  })
                }
                required
              />
            </div>
            <hr className="my-3" />
            <div className="d-flex justify-content-between align-items-center ">
              <p className="h5 text-muted mb-3">Laptop Details</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-2">
                <ReusableInput
                  label="Asset Name"
                  id="laptop-assetName"
                  value={receiptData.laptop.assetName}
                  placeholder={data.laptop.assetName}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      laptop: {
                        ...receiptData.laptop,
                        assetName: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>

              <div className="col-12 col-md-2">
                <ReusableInput
                  label="Asset"
                  id="laptop-asset"
                  value={receiptData.laptop.asset}
                  placeholder={data.laptop.asset}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      laptop: {
                        ...receiptData.laptop,
                        asset: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>

              <div className="col-12 col-md-2">
                <ReusableInput
                  label="Make"
                  id="laptop-make"
                  value={receiptData.laptop.make}
                  placeholder={data.laptop.make}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      laptop: {
                        ...receiptData.laptop,
                        make: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>

              <div className="col-12 col-md-3">
                <ReusableInput
                  label="Model"
                  id="laptop-model"
                  value={receiptData.laptop.model}
                  placeholder={data.laptop.model}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      laptop: {
                        ...receiptData.laptop,
                        model: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>

              <div className="col-12 col-md-2">
                <ReusableInput
                  label="Serial Number"
                  id="laptop-serialNumber"
                  value={receiptData.laptop.serialNumber}
                  placeholder={data.laptop.serialNumber}
                  onChange={(e) =>
                    setReceiptData({
                      ...receiptData,
                      laptop: {
                        ...receiptData.laptop,
                        serialNumber: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
            </div>
            <hr className="my-3" />
            <div className="d-flex justify-content-between align-items-center ">
              <p className="h5 text-muted mb-3">
                Additional Acceseries Details
              </p>
            </div>
            {acceseries.map((acc, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-12 col-md-2">
                    <ReusableInput
                      label="Asset Name"
                      id={"acc" + { index } + "assetName"}
                      value={acc.assetName}
                      placeholder={data.acceseries.assetName}
                      onChange={(e) =>
                        updateAccesseries(index, {
                          ...acc,
                          assetName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12 col-md-2">
                    <ReusableInput
                      label="Asset "
                      id={"acc" + { index } + "asset"}
                      value={acc.asset}
                      placeholder={data.acceseries.asset}
                      onChange={(e) =>
                        updateAccesseries(index, {
                          ...acc,
                          asset: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12 col-md-2">
                    <ReusableInput
                      label="Make"
                      id={"acc" + { index } + "make"}
                      value={acc.make}
                      placeholder={data.acceseries.make}
                      onChange={(e) =>
                        updateAccesseries(index, {
                          ...acc,
                          make: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <ReusableInput
                      label="Model"
                      id={"acc" + { index } + "model"}
                      value={acc.model}
                      placeholder={data.acceseries.model}
                      onChange={(e) =>
                        updateAccesseries(index, {
                          ...acc,
                          model: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12 col-md-2">
                    <ReusableInput
                      label="Serial Number"
                      id={"acc" + { index } + "serialNumber"}
                      value={acc.serialNumber}
                      placeholder={data.acceseries.serialNumber}
                      onChange={(e) =>
                        updateAccesseries(index, {
                          ...acc,
                          serialNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="col-12 col-md-1 mb-3 d-flex justify-content-start align-items-end">
                    <button
                      type="button"
                      className="btn btn-primary me-1"
                      onClick={addRow}
                    >
                      +
                    </button>
                    {receiptData.acceseries.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteRow(acc.id)}
                      >
                        x
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="col-12 col-md-12">
              <ReactQuill
                theme="snow"
                value={receiptData.termsAndConditions}
                onChange={(e) => {
                  receiptData.termsAndConditions = e;
                }}
                placeholder={data.termsAndConditions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopSubmissionForm;
