import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import Inventory from "./pages/inventory";
import AddInventory from "./pages/addInventory";
import Volunteerings from "./pages/Volunteerings";
import Volunteering from "./pages/volunteering";

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
