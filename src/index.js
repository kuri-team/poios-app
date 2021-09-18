// Libraries
import React from "react";
import ReactDOM from "react-dom";

// Application Components
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./SocketContext";

// Fonts
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/200-italic.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/300-italic.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/500-italic.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/600-italic.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/700-italic.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/400-italic.css";
import "@fontsource/roboto-mono/700.css";
import "@fontsource/roboto-mono/700-italic.css";

// Stylesheets
import "normalize.css";
import "./styles/animations.css";
import "./styles/global.module.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); // TODO: Delete this line later if web vital report is not needed in the production build
