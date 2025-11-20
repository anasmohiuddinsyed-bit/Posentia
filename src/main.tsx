import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error('Root element not found');
} else {
  createRoot(rootElem).render(<App />);
}
