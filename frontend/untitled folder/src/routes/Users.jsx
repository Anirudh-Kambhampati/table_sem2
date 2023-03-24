import React, { useEffect } from "react";
import "./general.css";
import "../App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import EnhancedTable from "../components/users/EnhancedTable";

const tableDataKey = "tableDataUsers";

const Users = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "UserID",
        accessor: "userId",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "e-Mail",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Assigned Projects",
        accessor: "assignedProjects",
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
    const usersLocalStorage = localStorage.getItem(tableDataKey);
    if (usersLocalStorage) {
      setData(() => JSON.parse(usersLocalStorage));
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
      <EnhancedTable
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
};

export default Users;
