import React from "react";

const RowJSONRenderer = ({ row }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <pre>{JSON.stringify(row, null, 2)}</pre>
    </div>
  );
};

export default RowJSONRenderer;
