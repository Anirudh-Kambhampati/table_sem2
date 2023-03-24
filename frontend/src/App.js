import React from "react";
import { Provider } from "react-redux";
import "./App.css";
// import Mainbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import Instruments from "./routes/Instruments";
import Projects from "./routes/Projects";
import Storage from "./routes/Storage";
import { BarBoard, PieBoard } from "./components/dashboard/Dasboard";
import Users from "./routes/Users";
import UserInfo from "./components/users/UserInfo";
import ProjExt from "./routes/ProjExt";
import { ManageStorage } from "./components/instrumentRedirect/ManageStorage";
import { ManageInstrument } from "./components/instrumentRedirect/ManageInstrument";
import AnalyzeImage from "./components/instrumentRedirect/AnalyzeImage";

//Remove This
import * as FaIcons from "react-icons/fa";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}

      <Router>
        <Outlet />
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ marginTop: "80px" }}>
            <h5 style={{ marginLeft: "1200px", marginTop: "-50px" }}>
              John Doe
              <FaIcons.FaBars style={{ marginLeft: "10px" }} />
            </h5>
            <Routes>
              {/* <Route path="/" exact component={Users} element={<Users />} /> */}
              {/* <Route
                path="/userInfo"
                component={UserInfo}
                element={<UserInfo />}
              /> */}
              <Route
                path="/"
                element={
                  <div>
                    <BarBoard style={{ outerHeight: "300px" }} />
                    {/* <PieBoard style={{ height: "2px" }} /> */}
                  </div>
                }
              />
              <Route path="/instruments" element={<Instruments />} />
              <Route
                path="/storage"
                component={Storage}
                element={<Storage />}
              />
              <Route
                path="/projects"
                component={Projects}
                element={<Projects />}
              />
              <Route
                path="/projects/projExt"
                component={ProjExt}
                element={<ProjExt />}
              />
              <Route
                path="/projects/projExt/manageStorage"
                component={ManageStorage}
                element={<ManageStorage />}
              />
              <Route
                path="/projects/projExt/manageInstrument"
                component={ManageInstrument}
                element={<ManageInstrument />}
              />
              <Route
                path="/projects/projExt/analyzeImg"
                component={AnalyzeImage}
                element={<AnalyzeImage />}
              />
            </Routes>
          </div>
        </div>
      </Router>
      {/* </Provider> */}
    </>
  );
}

export default App;
