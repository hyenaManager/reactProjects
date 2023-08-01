import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import { motion } from "framer-motion";
import React from "react";

export default function MessageBox({ onSendMessage, user, changeNav }) {
  const myTheme = useContext(ThemeContext);
  const [inputMessage, setInputMessage] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => changeNav("sendBox"));
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          className="messageHead rounded p-2 shadow"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <h5 className="text-center">YOU CAN FIND US ON</h5>
          <hr />
          <div className="socialMedia">
            <a
              href="https://www.facebook.com/profile.php?id=100089539521655"
              className="  justify-content-center"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <i
                className="fa fa-facebook-f"
                style={{
                  fontSize: "30px",
                  color: "blue",
                }}
              ></i>
            </a>
            <a
              href="https://twitter.com/elonmusk"
              className="  justify-content-center"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <i
                className="fa fa-twitter"
                style={{ fontSize: "30px", color: "aqua" }}
              ></i>
            </a>

            <i className="fa fa-instagram" style={{ fontSize: "30px" }}></i>
            <i
              className="fa fa-whatsapp"
              style={{ fontSize: "32px", color: "lightgreen" }}
            ></i>
          </div>
        </div>
        <div className="messageBox shadow rounded p-3 mt-3">
          <h5> OR MESSAGE US HERE </h5>
          <hr />
          <div>
            <label>Title</label>
            <input
              value={title}
              className="form-control user-name"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="mt-1">Message</label>
            <textarea
              value={inputMessage}
              placeholder="write your message here"
              className="form-control"
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              className="btn btn-outline-success mt-1"
              onClick={() => {
                onSendMessage({
                  user: user,
                  title: title,
                  message: inputMessage,
                });
                setInputMessage("");
                setTitle("");
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
