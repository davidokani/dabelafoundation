import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
