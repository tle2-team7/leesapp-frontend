import { useState, useRef, useEffect } from "react";
import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
import MessageComponent from "./components/MessageComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assignment from "./assignment/Assignment";
import AssignmentSelection from "./assignment_selection/AssignmentSelection";
import Settings from "./settings/Settings";
import speak from "./components/TextToSpeechComponent";


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
