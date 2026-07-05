import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// In production the dashboard is served under /dashboard on Vercel.
// PUBLIC_URL is set to /dashboard in scripts/build-vercel.js so the
// basename must match so React Router links resolve correctly.
const basename = process.env.PUBLIC_URL || "";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);