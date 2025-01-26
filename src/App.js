import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Community } from './components/Community';
import UserWayWidget from "./components/UserWayWidget";
import TextToVoice from './components/TextToVoice';

function App() {
  return (
    <Router>
      <TextToVoice />
      <UserWayWidget />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

