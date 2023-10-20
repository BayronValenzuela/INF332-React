import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import "../chats.css";

function Chats() {
  return (
    <div className="chats">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Chats;
