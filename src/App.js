import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Mypage/Main';
import Korea from './Mypage/Korea';
import Canada from './Mypage/Canada';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/korea" element={<Korea />} />
          <Route path="/canada" element={<Canada />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
