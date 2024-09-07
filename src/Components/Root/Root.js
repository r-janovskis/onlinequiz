import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Root.css";

import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
