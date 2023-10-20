import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "../chats.css"


function Chats() {
  return <div className="chats">
    <Sidebar/>
    <Chat/>
  </div>
}

export default Chats;