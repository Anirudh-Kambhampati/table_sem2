import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import img from "../../images/chatbot.png";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: "",
      int: "",
      bright: "",
      res: "",
      beam: "",
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { pos, int, bright, res, beam } = steps;

    this.setState({ pos, int, bright, res, beam });
  }

  render() {
    const { pos, int, bright, res, beam } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Move Sample Position to</td>
              <td>{pos.value}</td>
            </tr>
            <tr>
              <td>Set the Beam Spot Intensity</td>
              <td>{int.value}</td>
            </tr>
            <tr>
              <td>Set SEM brightness</td>
              <td>{bright.value}</td>
            </tr>
            <tr>
              <td>Change Image resolution</td>
              <td>{res.value}</td>
            </tr>
            <tr>
              <td>Set high tension of the electron beam</td>
              <td>{beam.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// function Review(props) {
//   const { steps } = props;
//   const { pos, int, bright, res, beam } = steps;

//   return (
//     <div style={{ width: "100%" }}>
//       <h3>Summary</h3>
//       <table>
//         <tbody>
//           <tr>
//             <td>Move Sample Position to</td>
//             <td>{pos.value}</td>
//           </tr>
//           <tr>
//             <td>Set the Beam Spot Intensity</td>
//             <td>{int.value}</td>
//           </tr>
//           <tr>
//             <td>Set SEM brightness</td>
//             <td>{bright.value}</td>
//           </tr>
//           <tr>
//             <td>Change Image resolution</td>
//             <td>{res.value}</td>
//           </tr>
//           <tr>
//             <td>Set high tension of the electron beam</td>
//             <td>{beam.value}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

const steps = [
  {
    id: "0",
    message: "Hey! These are the recommendations based on your image!",
    trigger: "pos",
  },
  {
    id: "pos",
    options: [
      {
        value: "(1e-6, 1e-6)",
        label: "Change Position to (1e-6, 1e-6)",
        trigger: "int",
      },
      {
        value: "(1e-8, 1e-8)",
        label: "Change Position to (1e-8, 1e-8)",
        trigger: "int",
      },
    ],
  },
  {
    id: "int",
    options: [
      { value: "2.1", label: "Change Intensity to 2.1", trigger: "bright" },
      { value: "3.3", label: "Change Intensity to 3.3", trigger: "bright" },
    ],
  },
  {
    id: "bright",
    options: [
      { value: "0.4", label: "Change Intensity to 0.4", trigger: "res" },
      { value: "0.6", label: "Change Intensity to 0.6", trigger: "res" },
    ],
  },
  {
    id: "res",
    options: [
      {
        value: "1920 x 1200",
        label: "Change Resolution to 1920 x 1200",
        trigger: "beam",
      },
      {
        value: "912 x 912",
        label: "Change Resolution to 912 x 912",
        trigger: "beam",
      },
    ],
  },
  {
    id: "beam",
    options: [
      { value: "10kV", label: "Set High Tension to 10kV", trigger: "2" },
      { value: "15kV", label: "Set High Tension to 15kV", trigger: "2" },
    ],
  },
  {
    id: "2",
    message: "Great! Check out your summary",
    trigger: "review",
  },
  {
    id: "review",
    component: <Review />,
    asMessage: true,
    trigger: "update",
  },
  {
    id: "update",
    message: "Would you like to update some field?",
    trigger: "update-question",
  },
  {
    id: "update-question",
    options: [
      { value: "yes", label: "Yes", trigger: "update-yes" },
      { value: "no", label: "No", trigger: "end-message" },
    ],
  },
  {
    id: "update-yes",
    message: "What field would you like to update?",
    trigger: "update-fields",
  },
  {
    id: "update-fields",
    options: [
      {
        value: "pos",
        label: "Move Sample Position to:",
        trigger: "update-pos",
      },
      {
        value: "int",
        label: "Set the Beam Spot Intensity",
        trigger: "update-int",
      },
      {
        value: "bright",
        label: "Set SEM brightness",
        trigger: "update-bright",
      },
      { value: "res", label: "Change Image resolution", trigger: "update-res" },
      {
        value: "beam",
        label: "Set high tension of the electron beam",
        trigger: "update-beam",
      },
    ],
  },
  {
    id: "update-pos",
    update: "pos",
    trigger: "2",
  },
  {
    id: "update-int",
    update: "int",
    trigger: "2",
  },
  {
    id: "update-bright",
    update: "bright",
    trigger: "2",
  },
  {
    id: "update-res",
    update: "res",
    trigger: "2",
  },
  {
    id: "update-beam",
    update: "beam",
    trigger: "2",
  },
  {
    id: "end-message",
    message: "Thanks! Your data was submitted successfully!",
    end: true,
  },
];

const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};
// const config = {
//   floating: true,
// };
const Recommendations = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {console.log(steps)}
        <ChatBot
          headerTitle="RISE BOT"
          steps={steps}
          preventAutoFocus={true}
          floating={true}
          floatingButtonNext={true}
        />
      </ThemeProvider>
    </div>
  );
};

export default Recommendations;

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import ChatBot from "react-simple-chatbot";
// import { ThemeProvider } from "styled-components";
// import img from "../../images/chatbot.png";

// function Review(props) {
//   const { steps } = props;
//   const { pos, int, bright, res, beam } = steps;

//   return (
//     <div style={{ width: "100%" }}>
//       <h3>Summary</h3>
//       <table>
//         <tbody>
//           <tr>
//             <td>Move Sample Position to</td>
//             <td>{pos.value}</td>
//           </tr>
//           <tr>
//             <td>Set the Beam Spot Intensity</td>
//             <td>{int.value}</td>
//           </tr>
//           <tr>
//             <td>Set SEM brightness</td>
//             <td>{bright.value}</td>
//           </tr>
//           <tr>
//             <td>Change Image resolution</td>
//             <td>{res.value}</td>
//           </tr>
//           <tr>
//             <td>Set high tension of the electron beam</td>
//             <td>{beam.value}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

// function App() {
//   const [pos, setPos] = useState(null);
//   const [int, setInt] = useState(null);
//   const [bright, setBright] = useState(null);
//   const [res, setRes] = useState(null);
//   const [beam, setBeam] = useState(null);

//   function handlePos({ value }) {
//     setPos({ value });
//     return pos;
//   }

//   function handleInthandleInt({ value }) {
//     setInt({ value });
//     return int;
//   }

//   function handleBright({ value }) {
//     setBright({ value });
//     return bright;
//   }

//   function handleRes({ value }) {
//     setRes({ value });
//     return res;
//   }

//   function handleBeam({ value }) {
//     setBeam({ value });
//     return beam;
//   }

//   function handleUpdatePos({ value }) {
//     setPos({ value });
//     return "2";
//   }

//   function handleUpdateInt({ value }) {
//     setInt({ value });
//     return "2";
//   }

//   function handleUpdateBright({ value }) {
//     setBright({ value });
//     return "2";
//   }

//   function handleUpdateRes({ value }) {
//     setRes({ value });
//     return "2";
//   }

//   function handleUpdateBeam({ value }) {
//     setBeam({ value });
//     return "2";
//   }

//   return (
//     <ThemeProvider theme={{ background: "white", fontFamily: "Arial" }}>
//       <ChatBot
//         headerTitle="Chat with our SEM expert"
//         recognitionEnable={true}
//         steps={[
//           {
//             id: "0",
//             message: "Hey! These are the recommendations based on your image!",
//             trigger: "pos",
//           },
//           {
//             id: "pos",
//             options: [
//               {
//                 value: "(1e-6, 1e-6)",
//                 label: "Change Position to (1e-6, 1e-6)",
//                 trigger: handlePos(),
//               },
//               {
//                 value: "(1e-8, 1e-8)",
//                 label: "Change Position to (1e-8, 1e-8)",
//                 trigger: handlePos(),
//               },
//             ],
//           },
//           {
//           id: "int",
//           options: [
//             { value: "2.1", label: "Change Intensity to 2.1", trigger: "bright" },
//             { value: "3.3", label: "Change Intensity to 3.3", trigger: "bright" },
//           ],
//         },
//         {
//           id: "bright",
//           options: [
//             { value: "0.4", label: "Change Intensity to 0.4", trigger: "res" },
//             { value: "0.6", label: "Change Intensity to 0.6", trigger: "res" },
//           ],
//         },
//         {
//           id: "res",
//           options: [
//             {
//               value: "1920 x 1200",
//               label: "Change Resolution to 1920 x 1200",
//               trigger: "beam",
//             },
//             {
//               value: "912 x 912",
//               label: "Change Resolution to 912 x 912",
//               trigger: "beam",
//             },
//           ],
//         },
//         {
//           id: "beam",
//           options: [
//             { value: "10kV", label: "Set High Tension to 10kV", trigger: "2" },
//             { value: "15kV", label: "Set High Tension to 15kV", trigger: "2" },
//           ],
//         },
//         {
//           id: "2",
//           message: "Great! Check out your summary",
//           trigger: "review",
//         },
//         {
//           id: "review",
//           component: <Review />,
//           asMessage: true,
//           trigger: "update",
//         },
//         {
//           id: "update",
//           message: "Would you like to update some field?",
//           trigger: "update-question",
//         },
//         {
//           id: "update-question",
//           options: [
//             { value: "yes", label: "Yes", trigger: "update-yes" },
//             { value: "no", label: "No", trigger: "end-message" },
//           ],
//         },
//         {
//           id: "update-yes",
//           message: "What field would you like to update?",
//           trigger: "update-fields",
//         },
//         {
//           id: "update-fields",
//           options: [
//             {
//               value: "pos",
//               label: "Move Sample Position to:",
//               trigger: "update-pos",
//             },
//             {
//               value: "int",
//               label: "Set the Beam Spot Intensity",
//               trigger: "update-int",
//             },
//             {
//               value: "bright",
//               label: "Set SEM brightness",
//               trigger: "update-bright",
//             },
//             { value: "res", label: "Change Image resolution", trigger: "update-res" },
//             {
//               value: "beam",
//               label: "Set high tension of the electron beam",
//               trigger: "update-beam",
//             },
//           ],
//         },
//         {
//           id: "update-pos",
//           update: "pos",
//           trigger: "2",
//         },
//         {
//           id: "update-int",
//           update: "int",
//           trigger: "2",
//         },
//         {
//           id: "update-bright",
//           update: "bright",
//           trigger: "2",
//         },
//         {
//           id: "update-res",
//           update: "res",
//           trigger: "2",
//         },
//         {
//           id: "update-beam",
//           update: "beam",
//           trigger: "2",
//         },
//         {
//           id: "end-message",
//           message: "Thanks! Your data was submitted successfully!",
//           end: true,
//         },
//       ]} />
//       </ThemeProvider>)}

// export default App
