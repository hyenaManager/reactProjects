import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "./themeContext";
import { motion } from "framer-motion";
import {
  faBurger,
  faCakeCandles,
  faCarrot,
  faHatCowboy,
  faMartiniGlassCitrus,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
export default function Catagories({ onListClick, Id }) {
  const myTheme = useContext(ThemeContext);
  return (
    <>
      <div className="">
        <ul className="  list-group catagoriesList ">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("all", 10);
            }}
            style={
              Id === 10
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            All
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("fruit", 0);
            }}
            style={
              Id === 0
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            <FontAwesomeIcon icon={faCarrot} title="fruit" />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("snack", 1);
            }}
            style={
              Id === 1
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            <FontAwesomeIcon icon={faBurger} title="snack" />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("cake", 2);
            }}
            style={
              Id === 2
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            <FontAwesomeIcon icon={faCakeCandles} title="cake" />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("hat", 3);
            }}
            style={
              Id === 3
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            <FontAwesomeIcon icon={faHatCowboy} title="hat" />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("pizza", 4);
            }}
            style={
              Id === 4
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            <FontAwesomeIcon icon={faPizzaSlice} title="pizza" />
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={"list-group-item text-center"}
            onClick={() => {
              onListClick("beverage", 5);
            }}
            style={
              Id === 5
                ? { color: "white", backgroundColor: myTheme }
                : { color: myTheme }
            }
          >
            <FontAwesomeIcon icon={faMartiniGlassCitrus} title="beverage" />
          </motion.li>
        </ul>
      </div>
    </>
  );
}
