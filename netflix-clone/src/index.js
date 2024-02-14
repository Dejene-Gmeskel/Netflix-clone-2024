import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom";
import { UserProvider } from "../src/Utils/userContext"; // Import the UserProvider from userContext.js
import App from "./App";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
