import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function Review(props) {
  const { steps } = props;
  const { ol, ec, as, at, de } = steps;

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Oriental Loss</td>
            <td>{ol.value}</td>
          </tr>
          <tr>
            <td>Edge Coverage</td>
            <td>{ec.value}</td>
          </tr>
          <tr>
            <td>Average Thickness</td>
            <td>{at.value}</td>
          </tr>
          <tr>
            <td>Average Seperation</td>
            <td>{as.value}</td>
          </tr>
          <tr>
            <td>Distance Entropy</td>
            <td>{de.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const steps = [
  {
    id: "0",
    message: "Hey! These are the recommendations based on your image!",
    trigger: "ol",
  },
  {
    id: "ol",
    options: [
      {
        value: "9922",
        label: "1) Orientational Loss: 9922",
        trigger: "ec",
      },
      {
        value: "9977",
        label: "2) Orientatational Loss: 9977",
        trigger: "ec",
      },
    ],
  },
  {
    id: "ec",
    options: [
      { value: "15.64", label: "1)Edge Coverage: 15.64%", trigger: "at" },
      { value: "10.85", label: "2) Edge Coverage: 10.85%", trigger: "at" },
    ],
  },
  {
    id: "at",
    options: [
      { value: "1.9965", label: "1) Average Thickness: 1.9965", trigger: "as" },
      { value: "2.8043", label: "2) Average Thickness: 2.8043", trigger: "as" },
    ],
  },
  {
    id: "as",
    options: [
      {
        value: "2.4233",
        label: "1) Average Seperation: 2.4233",
        trigger: "de",
      },
      {
        value: "3.2337",
        label: "2) Average Seperation: 3.2337",
        trigger: "de",
      },
    ],
  },
  {
    id: "de",
    options: [
      { value: "4.1677", label: "1) Distance Entropy: 4.1677", trigger: "2" },
      { value: "4.9932", label: "2) Distance Entropy: 4.9932", trigger: "2" },
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
        value: "ol",
        label: "Orientational Loss:",
        trigger: "update-ol",
      },
      {
        value: "ec",
        label: "Edge Coverage",
        trigger: "update-ec",
      },
      {
        value: "at",
        label: "Average Thickness",
        trigger: "update-at",
      },
      { value: "as", label: "Average Seperation", trigger: "update-as" },
      {
        value: "de",
        label: "Distance Entropy",
        trigger: "update-de",
      },
    ],
  },
  {
    id: "update-ol",
    update: "ol",
    trigger: "2",
  },
  {
    id: "update-ec",
    update: "ec",
    trigger: "2",
  },
  {
    id: "update-at",
    update: "at",
    trigger: "2",
  },
  {
    id: "update-as",
    update: "as",
    trigger: "2",
  },
  {
    id: "update-de",
    update: "de",
    trigger: "2",
  },
  {
    id: "end-message",
    message: "Thanks! Your parameters were updated successfully!😁",
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

const Recommendations = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {console.log(steps)}
        <ChatBot
          headerTitle="RISE BOT"
          steps={steps}
          floating={true}
          floatingButtonNext={true}
        />
      </ThemeProvider>
    </div>
  );
};

export default Recommendations;
