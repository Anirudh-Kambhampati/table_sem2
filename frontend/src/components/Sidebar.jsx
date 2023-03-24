// import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";

// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "../App.css";
// import { IconContext } from "react-icons";

// import logo from "../images/logoAI.png";

// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => {
//     setSidebar(!sidebar);
//   };

//   return (
//     <div className="sidebar">
//       <div>
//         <IconContext.Provider value={{ color: "undefined" }}>
//           <Link to="#" className="menu-bars">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>

//           <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//             <ul className="nav-menu-items" onClick={showSidebar}>
//               <li className="sidebar-toggle">
//                 <Link to="#" className="menu-bars">
//                   <AiIcons.AiOutlineClose />
//                 </Link>
//               </li>
//               {SidebarData.map((item, index) => {
//                 return (
//                   <li
//                     key={index}
//                     className={item.cName}
//                     style={{ marginTop: "20px" }}
//                   >
//                     <Link to={item.path}>
//                       {item.icon}
//                       <span style={{ fontSize: "20px", marginLeft: "20px" }}>
//                         {item.title}
//                       </span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>
//         </IconContext.Provider>
//       </div>
//       <div className="d-flex flex-row-reverse">
//         RISE
//         <img
//           alt=""
//           src={logo}
//           width="30"
//           height="30"
//           className="d-inline-block align-top logo"
//         />{" "}
//       </div>
//       {/* <span style={{ marginLeft: "70rem" }}>
//         Signed in as: <a href="#login">John Doe</a>
//       </span> */}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import logo from "../images/logoAI.png";

const Sidebar = () => {
  return (
    <div>
      <span
        className="d-flex"
        style={{
          background: "#7AD0ED",
          flexFlow: "wrap",
          justifyContent: "space-around",
          overflowY: "scroll",
        }}
      >
        <img
          alt=""
          src={logo}
          height={40}
          width={40}
          className="d-inline-block align-top logo"
          style={{ marginTop: "25px" }}
        />
        <h2
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          RISE
        </h2>
      </span>
      <div
        style={{
          height: "1500px",
          width: "200px",
          padding: "10px",
          background: "#7AD0ED",
        }}
      >
        {SidebarData.map((item, index) => {
          return (
            <li
              key={index}
              className={item.cName}
              style={{ marginTop: "20px", listStyle: "none" }}
            >
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.icon}
                <span
                  style={{
                    fontSize: "15px",
                    marginLeft: "20px",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
