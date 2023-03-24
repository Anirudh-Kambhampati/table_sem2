import React, { useEffect } from "react";
import "./general.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTableIns from "../components/ins/EnhancedTableIns";

const tableDataKey = "tableDataIns";

const Instruments = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Unit",
        accessor: "unit",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "IP Address",
        accessor: "ipAddress",
      },
      {
        Header: "Gateway",
        accessor: "gateway",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const [data, setData] = React.useState([]);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(tableDataKey);
    if (dataFromLocalStorage) {
      setData(() => JSON.parse(dataFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      localStorage.setItem(tableDataKey, JSON.stringify(data));
    }
  }, [data]);

  return (
    <div className="users">
      <CssBaseline />
      <EnhancedTableIns
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
};

export default Instruments;
