import React from "react";
import "./manageStorage.css";

export const ManageInstrument = () => {
  const data = [
    { instrument: "SEM1", type: "SEM" },
    { instrument: "SEM2", type: "SEM" },
    { instrument: "SEM1", type: "SEM" },
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
          <th>Instrument</th>
          <th>Type</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} style={{ textAlign: "center" }}>
              <td>{val.instrument}</td>
              <td>{val.type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
