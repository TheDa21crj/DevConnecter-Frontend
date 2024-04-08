import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// css
import "./index.css";

import { AuthContextProvider } from "./store/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
