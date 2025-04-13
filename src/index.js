import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Bpp from "./Bpp";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Bpp/>
  </StrictMode>
);