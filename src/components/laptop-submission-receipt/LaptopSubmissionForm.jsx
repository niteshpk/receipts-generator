import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const asset = {
  assetName: "Asset name",
  make: "Manufacturer name",
  model: "Model",
  serialNumber: "Serial number",
};

const data = {
  receiptNo: "Receipt No",
  transactionDate: "Transaction Date",
  amount: "Transaction Amount",
  transactionId: "Transaction ID",
  accountNo: "Account No",
  bankReferenceNo: "Bank Reference No",
  invoiceNo: "Invoice No",
  serviceProvider: "Service Provider",
  tagLine: "Tag Line",
  note: "Note",
  dateOfIssue: "DD/MM/YYYY",
  candidateName: "Candidate name",
  companyShortName: "Company short name",
  companyFullName: "Company full name",
  laptop: {
    ...asset,
    asset: "Asset",
  },
  acceseries: {
    ...asset,
  },
  termsAndConditions: "Terms and conditions",
};

const LaptopSubmissionForm = ({
  receiptData,
  setReceiptData,
  addRow,
  handleTemplateVariableChanges,
}) => {
  const [acceseries, setAcceseries] = useState([]);

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
              <div className="mb-3">
                <label htmlFor="candidateName" className="form-label">
                  Candidate Name
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>
            <div className="col-12 col-md-3">
              <div className="mb-3">
                <label htmlFor="companyShortName" className="form-label">
                  Company Short Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyShortName"
                  value={receiptData.companyShortName}
                  placeholder={data.companyShortName}
                  onChange={(e) => {
                    setReceiptData({
                      ...receiptData,
                      companyShortName: e.target.value,
                      companyFullName: receiptData.companyFullName,
                    });
                    handleTemplateVariableChanges({
                      ...receiptData,
                      companyShortName: e.target.value,
                      companyFullName: receiptData.companyFullName,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-3">
                <label htmlFor="companyFullName" className="form-label">
                  Company Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyFullName"
                  value={receiptData.companyFullName}
                  placeholder={data.companyFullName}
                  onChange={(e) => {
                    setReceiptData({
                      ...receiptData,
                      companyFullName: e.target.value,
                      companyShortName: receiptData.companyShortName,
                    });

                    handleTemplateVariableChanges({
                      ...receiptData,
                      companyFullName: e.target.value,
                      companyShortName: receiptData.companyShortName,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="mb-3">
                <label htmlFor="dateOfIssue" className="form-label">
                  Date of Issue
                </label>
                <input
                  type="text"
                  className="form-control"
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
            </div>
            <hr className="my-3" />
            <div className="d-flex justify-content-between align-items-center ">
              <p className="h5 text-muted mb-3">Laptop Details</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-2">
                <div className="mb-3">
                  <label htmlFor="laptop-assetName" className="form-label">
                    Asset Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
              </div>

              <div className="col-12 col-md-3">
                <div className="mb-3">
                  <label htmlFor="laptop-asset" className="form-label">
                    Asset
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
              </div>

              <div className="col-12 col-md-2">
                <div className="mb-3">
                  <label htmlFor="laptop-make" className="form-label">
                    Make
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
              </div>

              <div className="col-12 col-md-3">
                <div className="mb-3">
                  <label htmlFor="laptop-model" className="form-label">
                    Model
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
              </div>

              <div className="col-12 col-md-2">
                <div className="mb-3">
                  <label htmlFor="laptop-serialNumber" className="form-label">
                    Serial Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
                    <div className="mb-3">
                      <label
                        htmlFor={"acc" + { index } + "assetName"}
                        className="form-label"
                      >
                        Asset Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
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
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor={"acc" + { index } + "make"}
                        className="form-label"
                      >
                        Make
                      </label>
                      <input
                        type="text"
                        className="form-control"
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
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor={"acc" + { index } + "model"}
                        className="form-label"
                      >
                        Model
                      </label>
                      <input
                        type="text"
                        className="form-control"
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
                  </div>
                  <div className="col-12 col-md-3">
                    <div className="mb-3">
                      <label
                        htmlFor={"acc" + { index } + "serialNumber"}
                        className="form-label"
                      >
                        Serial Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
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
