import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import {
  faCartShopping,
  faCaretRight,
  faCaretLeft,
  faStar,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { myDatas } from "./datas";
import { AnimatePresence, motion } from "framer-motion";
import { CurrentUser, ThemeContext } from "./themeContext";
export default function ItemDetail({ addNewCart, changeNav }) {
  const { id } = useParams();
  const [index, setIndex] = useState(parseInt(id));
  const myTheme = useContext(ThemeContext);
  const currentUser = useContext(CurrentUser);
  const [loadingMain, setLoadingMain] = useState(true);
  const navigate = useNavigate();
  function backSetting() {
    navigate("/");
  }

  useEffect(() => changeNav("home"));
  useEffect(() => {
    const img = new Image();
    img.src = myDatas[index].source;
    img.onload = () => {
      setLoadingMain(false);
    };
  }, [index]);

  const loginErrorLog =
    currentUser === null ? (
      <i className="text-danger">login first to purchase</i>
    ) : null; //when user is not login this log pop up

  const decreaseButton = (
    <button
      className={"transparentButton rounded-5 "}
      style={{
        height: "50px",
        width: "50px",
        fontSize: "40px",
        marginRight: "4px",
        color: myTheme,
      }}
      onClick={() => {
        setIndex((index) => index - 1);
        setLoadingMain(true);
      }}
      disabled={index === 0 ? true : false}
    >
      <FontAwesomeIcon icon={faCaretLeft} />
    </button>
  );
  // decrease button should disappear when the index is minimum

  const increaseButton = (
    <button
      className={"transparentButton rounded-5 "}
      style={{
        height: "50px",
        width: "50px",
        fontSize: "40px",
        marginLeft: "4px",
        color: myTheme,
      }}
      onClick={() => {
        setIndex((index) => index + 1);
        setLoadingMain(true);
      }}
      disabled={index === myDatas.length - 1 ? true : false}
    >
      <FontAwesomeIcon icon={faCaretRight} />
    </button>
  );
  // also increase button should disappear when the index num is maximum

  return (
    <>
      <div
        className="d-flex justify-content-start transparentButton"
        onClick={backSetting}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <FontAwesomeIcon
          className=""
          icon={faArrowAltCircleLeft}
          style={{ color: myTheme, fontSize: "30px" }}
        />
        back
      </div>
      <div className="itemDetailMain">
        <div className="preImgDiv shadow">
          <AnimatePresence>
            <motion.div
              key={myDatas[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{
                scaleY: 1.08,
              }}
            >
              {index === 0 ? (
                <h3
                  className=" text-warning text-center"
                  style={{ marginTop: "100px" }}
                >
                  No more Item
                </h3>
              ) : (
                <motion.img
                  src={myDatas[index - 1].source}
                  className="img-fluid preImg rounded"
                  key={myDatas[index - 1].source}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        {decreaseButton}
        <div className="card " style={{ maxWidth: "300px" }}>
          <AnimatePresence>
            <motion.div
              key={myDatas[index] + "main"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {loadingMain ? (
                <div
                  className="card-img-top mainImg "
                  key={myDatas[index]}
                ></div>
              ) : (
                <motion.div className="card">
                  <img
                    src={myDatas[index].source}
                    className="card-img-top mainImg"
                    alt="..."
                    key={myDatas[index].id}
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="card-body">
            <h5 className="card-title">{myDatas[index].name}</h5>
            <span className="card-text">
              Made with some juicy meat, butter, tomato, bread and blah blah
              blah just try it to feel it.( just {myDatas[index].value} kyats)
            </span>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">production date : 2-5-2023</li>
            <li className="list-group-item">expired date : 3-9-2024</li>
            <li className="list-group-item">production code: 8D853L0</li>
          </ul>
          <div className="card-body imageDetailCart">
            <button className="card-link transparentButton">
              <FontAwesomeIcon
                icon={faStar}
                style={{ fontSize: "25px", color: "wheat" }}
                title="add to favourite"
              />
            </button>
            <a href="#" className="card-link">
              <button
                className={
                  "transparentButton " +
                  (currentUser === null ? "d-none" : null)
                } //cart button appear only when the user is login
                title="add to cart"
                onClick={() => addNewCart(myDatas[index])}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: myTheme, fontSize: "24px" }}
                />
              </button>
            </a>
          </div>
          {loginErrorLog}
        </div>
        {increaseButton}

        <div className="postImgDiv shadow">
          <AnimatePresence>
            <motion.div
              key={myDatas[index] + "pre"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{
                scaleY: 1.08,
              }}
            >
              {index === myDatas.length - 1 ? (
                <h3
                  className=" text-warning text-center"
                  style={{ marginTop: "100px" }}
                >
                  No more Item
                </h3>
              ) : (
                <motion.img
                  src={myDatas[index + 1].source}
                  className="img-fluid postImg rounded shadow"
                  key={myDatas[index + 1].source}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
