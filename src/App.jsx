import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Chats from "./components/Chats";
import Profile from "./components/Profile";
import Inventory from "./pages/inventory";
import AddInventory from "./pages/addInventory";
import Volunteerings from "./components/Volunteerings";
import Volunteering from "./components/volunteering";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/addinventory" element={<AddInventory />} />
          <Route path="/volunteerings" element={<Volunteerings />} />
          <Route path="/volunteering" element={<Volunteering />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
