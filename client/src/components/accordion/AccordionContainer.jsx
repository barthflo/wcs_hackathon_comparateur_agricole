import React, { Fragment, useState } from "react";
import AccordionIcon from "./AccordionIcon";
import Accordion_info_price from "./Accordion_info_price";

const ChatContainer = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <aside
        className={
          "p-4 chat-container position-absolute d-flex flex-column justify-content-start align-item-center p-2 z-index-accordion-panel accordeon-container " +
          (isOpen ? " open-chat" : " close-chat") +
          ` ${className}`
        }
      >
        <h2 className="mb-5">Moyenne globale des prix de ventes en France</h2>
        <Accordion_info_price />
      </aside>
      <AccordionIcon openChat={openChat} />
    </Fragment>
  );
};

export default ChatContainer;
