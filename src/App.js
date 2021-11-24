import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./component/ChatFeed.jsx";
import Modal from "./component/LoginForm";

export default function App() {
  const projectID = "562ef207-e11c-4323-838f-6d589eed9042";

  if (!localStorage.getItem("username")) return <Modal />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}
