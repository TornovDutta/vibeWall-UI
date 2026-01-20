import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

function AllRouter() {
  return (
          <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    
  );
}

export default AllRouter;
