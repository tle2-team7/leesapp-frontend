import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assignment from "./assignment/Assignment";
import AssignmentSelection from "./assignment_selection/AssignmentSelection";
import Settings from "./settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assignment />}></Route>
        <Route path="/assignment" element={<Assignment />}></Route>
        <Route path="/opdracht" element={<Assignment />}></Route>

        <Route path="/select" element={<AssignmentSelection />}></Route>

        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
