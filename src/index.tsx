import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DefaultTheme, ThemeProvider } from "styled-components";

const darkTheme: DefaultTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme: DefaultTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
