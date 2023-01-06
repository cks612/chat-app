import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import InfoBar from "../InfoBar";
import Input from "../Input";
import Messages from "../Messages";
import TextContainer from "../TextContainer";
import "./Chat.scss";

const ENDPOINT = "http://localhost:4000";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const name = searchParam.get("name");
    const room = searchParam.get("room");

    socket = io(ENDPOINT, { transports: ["websocket"] });

    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location]);

  useEffect(() => {
    //로딩 될때만 실행
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
