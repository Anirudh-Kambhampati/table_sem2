// console.log(JSON.parse(localStorage.getItem("tableData")));

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Modal } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { saveAs } from "file-saver";
import DownloadIcon from "@mui/icons-material/Download";
import img1 from "../images/MicrosoftTeams-image (1).png";
import img2 from "../images/MicrosoftTeams-image (2).png";
import img3 from "../images/MicrosoftTeams-image (3).png";
import img4 from "../images/MicrosoftTeams-image (4).png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    justify-content: center;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Table() {
  // Use the state and functions returned from useTable to build your UI
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });
  const ShowToastMessage = () => {
    toast.warn("Please Wait While the Image is being Analyzed", {
      autoClose: 1500,
    });
    toast.success("Analysis Sent !", {
      position: toast.POSITION.TOP_CENTER,
      delay: 3000,
    });
    setTimeout(() => {
      setDice(0.72);
      setPrec(0.63);
      setVol(16);
    }, 5000);
  };

  const data = [
    {
      image: "Image1",
      size: "1MB",
      instruments: 20001,
      store: 30001,
      analyzed: "Yes",
      disp: img1,
    },
    {
      image: "Image2",
      size: "1.5MB",
      instruments: 20002,
      store: 30002,
      analyzed: "Yes",
      disp: img2,
    },
    {
      image: "Image3",
      size: "970KB",
      instruments: 20002,
      store: 30003,
      analyzed: "Yes",
      disp: img3,
    },
    {
      image: "Image4",
      size: "1.30MB",
      instruments: 20003,
      store: 30001,
      analyzed: "Yes",
      disp: img4,
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [vol, setVol] = useState([]);
  const [dice, setDice] = useState([]);
  const [prec, setPrec] = useState([]);

  // Render the UI for your table
  return (
    // <table {...getTableProps()}>
    //   <thead>
    //     {headerGroups.map((headerGroup) => (
    //       <tr {...headerGroup.getHeaderGroupProps()}>
    //         {headerGroup.headers.map((column) => (
    //           <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //         ))}
    //       </tr>
    //     ))}
    //   </thead>
    //   <tbody {...getTableBodyProps()}>
    //     {rows.map((row, i) => {
    //       prepareRow(row);
    //       return (
    //         <tr {...row.getRowProps()}>
    //           {row.cells.map((cell) => {
    //             return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
    //           })}
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table className="twhy">
        <tr style={{ borderBottom: "1px solid black", textAlign: "center" }}>
          <th>Image Description</th>
          <th>Size</th>
          <th>Instruments</th>
          <th>Storage</th>
          <th>Analyzed</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} style={{ textAlign: "center" }}>
              <td>
                <Button onClick={handleOpen}>{val.image}</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  style={{ width: "100%", background: "white" }}
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      <img
                        src={val.disp}
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          width: "400px",
                        }}
                      />
                      {console.log(val["disp"].slice(-24))}
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ul>
                          <li>FileName: {val["disp"].slice(-24)}</li>
                          <li>Sample Organizsm: Mitochondria</li>
                          <li>Sampling Time: 10s</li>
                          <li>Resolution: 1024*1024</li>
                          <li>No.of Images in Volume: {vol}</li>
                          <li>Precision: {prec}</li>
                          <li>Dice Score: {dice}</li>
                        </ul>
                      </Typography>
                      <span
                        style={{
                          justifyContent: "space-around",
                          display: "flex",
                          marginTop: "50px",
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={() => {
                            saveAs(img1, "image.jpg");
                          }}
                        >
                          Download
                          <DownloadIcon />
                        </Button>
                        <div
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            onClick={ShowToastMessage}
                            variant="contained"
                          >
                            Send Analysis <SendIcon />
                          </Button>
                        </div>
                        <ToastContainer />
                      </span>
                    </Typography>
                  </Box>
                </Modal>
              </td>
              <td>{val.size}</td>
              <td>{val.instruments}</td>
              <td>{val.store}</td>
              <td>{val.analyzed}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

function App() {
  //Navigation v6
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `manageStorage`;
    navigate(path);
  };
  const routeChangeIns = () => {
    let path = `manageInstrument`;
    navigate(path);
  };
  const routeChangeImg = () => {
    let path = `analyzeImg`;
    navigate(path);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Image Description",
            accessor: "firstName",
          },
          {
            Header: "Size",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Instruments",
            accessor: "age",
          },
          {
            Header: "Storage",
            accessor: "visits",
          },
          {
            Header: "Analyzed",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );

  const data = [{}];

  return (
    <div>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
      <Stack
        spacing={2}
        direction="row"
        marginTop={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{ backgroundColor: "#3399FF" }}
          onClick={routeChange}
        >
          Manage Storage Data
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#3399FF" }}
          onClick={routeChangeIns}
        >
          Manage Instrument
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#3399FF" }}
          onClick={routeChangeImg}
        >
          Scan New Image
        </Button>
      </Stack>
    </div>
  );
}

export default App;
