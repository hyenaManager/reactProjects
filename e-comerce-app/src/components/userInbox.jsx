import { faBookOpenReader, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function UserInbox({
  messages,
  watchedMessage,
  deleteMessage,
  changeNav,
}) {
  const [selectedNavType, setSelectedNavType] = useState("primary");
  const myTheme = useContext(ThemeContext);
  const filteredMessage = messages.filter(
    (message) => message.type === selectedNavType
  );
  useEffect(() => changeNav("inbox"));
  function checkAllWatched(type) {
    const unwatchedMessages = messages.filter(
      (message) => message.type === type && message.watched === false
    );
    const isAllWatched = unwatchedMessages.length === 0;
    return isAllWatched;
  }
  const primaryHeading =
    selectedNavType !== "primary" ? <span>primary</span> : <span>PRIMARY</span>;
  const newItemHeading =
    selectedNavType !== "new item" ? (
      <span>new item</span>
    ) : (
      <span>NEW ITEM</span>
    );
  const promotionsHeading =
    selectedNavType !== "promotions" ? (
      <span>promotions</span>
    ) : (
      <span>PROMOTIONS</span>
    );

  function redDotNoti(type) {
    return checkAllWatched(type) ? null : (
      <i className="text-danger unwatched " style={{ paddingLeft: "4px" }}>
        new!
      </i>
    ); //red text will appear if unwatched message exist according to the heading type
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="mainDivInboxMessage mt-5  container "
      >
        <div className="messageHeadings row">
          <button
            className="col messageNav d-flex justify-content-center"
            style={
              selectedNavType === "primary"
                ? { borderBottom: "2px solid " + myTheme, color: myTheme }
                : null
            }
            onClick={() => setSelectedNavType("primary")}
          >
            {primaryHeading} {redDotNoti("primary")}
          </button>
          <button
            className="col messageNav d-flex justify-content-center"
            style={
              selectedNavType === "new item"
                ? { borderBottom: "2px solid " + myTheme, color: myTheme }
                : null
            }
            onClick={() => setSelectedNavType("new item")}
          >
            {newItemHeading} {redDotNoti("new item")}
          </button>
          <button
            className="col messageNav d-flex justify-content-center"
            style={
              selectedNavType === "promotions"
                ? { borderBottom: "2px solid " + myTheme, color: myTheme }
                : null
            }
            onClick={() => setSelectedNavType("promotions")}
          >
            {promotionsHeading} {redDotNoti("promotions")}
          </button>
        </div>
        <ul className="mt-3 border ">
          {filteredMessage.map((message) => (
            <Message
              key={message.id}
              message={message}
              watchedMessage={watchedMessage}
              deleteMessage={deleteMessage}
            />
          ))}
        </ul>
      </motion.div>
    </>
  );
}
function Message({ message, watchedMessage, deleteMessage }) {
  const myTheme = useContext(ThemeContext);
  const [reading, setReading] = useState(false);
  const isNewMessage = message.watched ? null : (
    <i className="badge bg-success">new!</i>
  );
  return (
    <>
      <motion.li
        initial={{ x: "-4vw" }}
        animate={{ opacity: 1, x: 0 }}
        className="messageList rounded m-2"
        style={{ maxHeight: "500px", overflow: "auto" }}
      >
        <button
          className="transparentButton "
          onClick={() => {
            setReading(!reading);
            watchedMessage(message.id);
          }}
        >
          <FontAwesomeIcon icon={faBookOpenReader} style={{ color: myTheme }} />
          <i> {reading ? "close" : "read"}</i>
        </button>
        <button className="transparentButton " style={{ color: "gray" }}>
          {message.title} {isNewMessage}
        </button>
        <button
          className="transparentButton "
          onClick={() => {
            deleteMessage(message.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
        </button>
      </motion.li>
      {reading ? <Watch message={message} /> : null}
    </>
  );
}

function Watch({ message }) {
  const messageContent = message.message;
  return (
    <>
      <div className="messageDisplay m-2">
        <textarea
          className=" disabled form-control"
          value={messageContent}
          readOnly
        />
      </div>
    </>
  );
}
