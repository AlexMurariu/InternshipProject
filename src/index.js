import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./services/interceptor";
import { routing } from "./routes/appRoutes";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>{routing}</CookiesProvider>,
  document.getElementById("root")
);
