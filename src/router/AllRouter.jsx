import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Documenents from "../pages/Documenents";

function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs" element={<Documenents />} />
    </Routes>
  );
}

export default AllRouter;
