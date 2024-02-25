import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screen3 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen1" element={<Screen1 />} />
      </Routes>
    </Router>
  );
}

export default App;