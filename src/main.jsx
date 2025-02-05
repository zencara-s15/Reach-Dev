/* 
--Node module
*/
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* 
--Components  
*/

import "./index.css";
import App from "./App.jsx";

/* 
--CSS link  
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
