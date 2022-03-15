import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

export const AlertContext = createContext();

const { Provider } = AlertContext;

export const AlertProvider = (props) => {
  const [textMessage, setTextMessage] = useState("");
  const [tipAlert, setTipAlert] = useState("");

  useEffect(() => {
    alertHandler(textMessage, tipAlert);
  }, [textMessage, tipAlert]);

  function alertHandler(textMessage, tipAlert) {
    if (tipAlert === "success") {
      return (
        <Alert variant="success">
          <Alert.Heading>Job is Done</Alert.Heading>
          <p>{textMessage}</p>
          <hr />
        </Alert>
      );
    } else {
      return (
        <Alert variant="danger">
          <Alert.Heading>Job is Done</Alert.Heading>
          <p>{textMessage}</p>
          <hr />
        </Alert>
      );
    }
  }

  return (
    <Provider
      value={
        (alertHandler, [textMessage, setTextMessage, tipAlert, setTipAlert])
      }
    >
      {props.children}
    </Provider>
  );
};
