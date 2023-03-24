import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import "./UserInfo.css";
import { useLocation } from "react-router-dom";

const UserInfo = () => {
  const useStyles = makeStyles({
    table: {
      width: 650,
    },
  });

  const classes = useStyles();
  const data = JSON.parse(localStorage.getItem("tableDataUsers"));
  console.log(data);
  const location = useLocation();
  console.log(location.state.val);
  const x = data.find((item) => item.userId === location.state.val);
  console.log(x);

  return (
    <>
      {console.log(<UserInfo />)}
      <div className="App">
        <div className="table-container">
          <Table className={classes.table}>
            <TableRow className="row-style">
              <TableCell variant="head">User ID</TableCell>
              <TableCell>{x.userId}</TableCell>
            </TableRow>
            <TableRow className="row-style">
              <TableCell variant="head">Name</TableCell>
              <TableCell>{x.name}</TableCell>
            </TableRow>
            <TableRow className="row-style">
              <TableCell variant="head">Email</TableCell>
              <TableCell>{x.email}</TableCell>
            </TableRow>
            <TableRow className="row-style">
              <TableCell variant="head">Role</TableCell>
              <TableCell>{x.role}</TableCell>
            </TableRow>
            <TableRow className="row-style">
              <TableCell variant="head">Assigned Projects</TableCell>
              <TableCell>{x.assignedProjects}</TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
