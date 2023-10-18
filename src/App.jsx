import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import NavBar from "./components/NavBar";
import Chats from "./components/Chats";
import Profile from "./components/Profile";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}