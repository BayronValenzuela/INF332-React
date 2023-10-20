import React, { useState } from "react";
import "../chats.css";

function Chat() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        {
          content: inputMessage,
          sender: "Yo",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);

      setInputMessage("");
    }
  };
  return (
    <div className="chat-container">
      <div className="chat-nombre">
        <p className="con-icon">R</p>
        <div className="chat-header">
          <p className="con-title">Rodrigo Jara</p>
          <p className="con-timeStamp">today</p>
        </div>
      </div>
      <div className="chat-mensajes">
        <div className="mensaje-recibido">
          <div className="conversacion">
            <p className="con-icon">R</p>
            <div className="mensaje-recibido-contenido">
              <p className="con-title">Rodrigo Jara</p>
              <p className="con-lastMessage">¿Cómo va todo por allá?</p>
              <p className="self-timeStamp">12:00:41 AM</p>
            </div>
          </div>
        </div>
        {messages.map((message, index) => (
          <div key={index} className="mensaje-enviado">
            <div className="conversacion-recibido">
              <div className="mensaje-enviado-contenido">
                <p className="con-lastMessage">{message.content}</p>
                <p className="self-timeStamp">{message.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input mb-5">
        <input
          placeholder="Envía un mensaje"
          className="sb-search"
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button className="bi bi-send" onClick={handleSendMessage}></button>
      </div>
    </div>
  );
}

export default Chat;
