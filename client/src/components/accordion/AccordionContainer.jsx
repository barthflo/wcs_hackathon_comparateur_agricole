import React, { Fragment, useState } from "react";
import AccordionIcon from "./AccordionIcon";

const ChatContainer = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <aside
        className={
          "chat-container position-absolute d-flex flex-column justify-content-center align-item-center p-2" +
          (isOpen ? " open-chat" : " close-chat") +
          ` ${className}`
        }
      ></aside>
      <AccordionIcon openChat={openChat} />
    </Fragment>
  );
};

export default ChatContainer;
