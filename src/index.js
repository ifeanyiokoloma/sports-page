import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/slabo-27px";
import "@fontsource/tangerine";
import "@fontsource/lato";
import NavbarContextProvider from "./contextProviders/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarContextProvider>
      <App />
    </NavbarContextProvider>
  </React.StrictMode>
);
