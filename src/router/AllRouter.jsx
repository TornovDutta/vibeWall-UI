import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Documenents from "../pages/Documenents";
import Setup from "../pages/Setup";
import Api from "../pages/Api";

function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs" element={<Documenents />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/api" element={<Api />} />
    </Routes>
  );
}

export default AllRouter;
