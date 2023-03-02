import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import ChatBox from './pages/chatbox/index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ChatBox />} />
      </Routes>
    </>
  );
}

export default App;
