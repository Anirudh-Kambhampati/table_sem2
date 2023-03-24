import React from "react";
import "./general.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTableProj from "../components/projects/EnhancedTableProj";
import { useEffect } from "react";

const tableDataKey = "tableDataProj";

const Projects = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Project ID",
        accessor: "project",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Images Scanned",
        accessor: "imgscan",
      },
      {
        Header: "Images Analysed",
        accessor: "imgana",
      },
      {
        Header: "Instruments",
        accessor: "ins",
      },
      {
        Header: "Storage Units",
        accessor: "units",
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
      <EnhancedTableProj
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
};

export default Projects;
