import React from "react";
import "./manageStorage.css";

export const ManageStorage = () => {
  const data = [
    { unit: "Unit1", folder: "Folder1", size: "100MB" },
    { unit: "Unit2", folder: "Folder2", size: "150MB" },
    { unit: "Unit3", folder: "Folder1", size: "100MB" },
  ];
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table className="twhy">
        <tr style={{ borderBottom: "1px solid black", textAlign: "center" }}>
          <th>Unit</th>
          <th>Folder</th>
          <th>Size</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} style={{ textAlign: "center" }}>
              <td>{val.unit}</td>
              <td>{val.folder}</td>
              <td>{val.size}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
