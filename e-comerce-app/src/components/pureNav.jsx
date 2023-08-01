import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faGear,
  faHouse,
  faListUl,
  faAddressCard,
  faUserCircle,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUser, ThemeContext } from "./themeContext";
export default function NavBarMobo({ allCarts, currentNav }) {
  const myTheme = useContext(ThemeContext);
  const currentUser = useContext(CurrentUser);
  const userName =
    currentUser !== null ? currentUser.user_name : <span>guest</span>;

  function selectedNav(nav) {
    if (currentNav === nav) {
      return {
        backgroundColor: "white",
        color: myTheme,
        fontSize: "28px",
        // borderTop: "2px solid " + myTheme,
      };
    } else {
      return {
        backgroundColor: myTheme,
        color: "white",
        fontSize: "28px",
      };
    }
  }
  return (
    <>
      <motion.nav
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="navHeading "
        style={{
          backgroundColor: myTheme,
          color: "whitesmoke",
          padding: "6px",
          fontFamily: "cursive",
        }}
      >
        <h3 className="">
          <FontAwesomeIcon icon={faChartPie} />
          <span>E-App</span>
        </h3>
        <div className="profileStatus d-flex justify-content-center flex-column">
          <img
            src={
              currentUser !== null
                ? currentUser.profile_picture
                : "/src/svgs/default.svg"
            }
            className="img-fluid rounded-circle"
            style={{ maxWidth: "40px", maxHeight: "40px", cursor: "pointer" }}
          />
          <i>{userName}</i>
        </div>
      </motion.nav>
      <motion.nav
        className="mainNav bg-body-tertiary"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navContent">
          <ul>
            <li className="col " style={selectedNav("home")}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className=" transparentButton "
              >
                <Link to={"/"}>
                  <FontAwesomeIcon
                    icon={faHouse}
                    title="Home"
                    style={selectedNav("home")}
                  />
                </Link>
              </motion.button>
            </li>
            <li className="col CartNav " style={selectedNav("cart")}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className=" transparentButton"
                style={{ position: "relative" }}
              >
                <Link to={"Cart"}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    title="cart"
                    style={selectedNav("cart")}
                  />
                </Link>
              </motion.button>
              {allCarts.length > 0 && (
                <span
                  className="bg-danger rounded-circle cartBadge"
                  style={{
                    width: "20px",
                    height: "20px",
                    fontSize: "15px",
                    position: "absolute",
                    right: "75%",
                    color: "white",
                  }}
                >
                  {allCarts.length}
                </span>
              )}
            </li>
            <li className="col " style={selectedNav("orderList")}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className=" transparentButton "
              >
                <Link to={"order-list"}>
                  <FontAwesomeIcon
                    icon={faListUl}
                    title="order list"
                    style={selectedNav("orderList")}
                  />
                </Link>
              </motion.button>
            </li>
            <li className="col " style={selectedNav("inbox")}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className=" transparentButton "
              >
                <Link to={"inbox"}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    title="inbox-message"
                    style={selectedNav("inbox")}
                  />
                </Link>
              </motion.button>
            </li>
            <li className="col " style={selectedNav("sendBox")}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="transparentButton"
              >
                <Link to={"message"}>
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    style={selectedNav("sendBox")}
                    title="contact"
                  />
                </Link>
              </motion.button>
            </li>
            <li className=" themeChanger col" style={selectedNav("setting")}>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="transparentButton"
              >
                <Link to={"setting"}>
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    style={selectedNav("setting")}
                  />
                </Link>
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
