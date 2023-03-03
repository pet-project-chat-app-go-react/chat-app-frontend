import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import ChatBox from './pages/chatbox/index';
import { DefaultLayout } from './components/common/Layout';

function App() {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ChatBox />} />
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
