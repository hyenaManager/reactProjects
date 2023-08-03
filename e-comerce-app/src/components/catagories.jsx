import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useTransition } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeContext } from "./themeContext";
import { motion } from "framer-motion";
import {
  faBurger,
  faCakeCandles,
  faCarrot,
  faHatCowboy,
  faList,
  faMartiniGlassCitrus,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
export default function Catagories({ onListClick, selectedList }) {
  const listType = [
    "all",
    "fruit",
    "snack",
    "cake",
    "hat",
    "pizza",
    "beverage",
  ];
  const logo = [
    faList,
    faCarrot,
    faBurger,
    faCakeCandles,
    faHatCowboy,
    faPizzaSlice,
    faMartiniGlassCitrus,
  ];
  return (
    <>
      <div className="">
        <ul className="  list-group catagoriesList ">
          {listType.map((list, index) => (
            <List
              key={list}
              type={list}
              onListClick={onListClick}
              logo={logo[index]}
              index={index}
              isSelected={index === selectedList}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function List({ type, onListClick, logo, isSelected, index }) {
  const [isHover, setIsHover] = useState(false);
  const myTheme = useContext(ThemeContext);
  function handleListClick() {
    onListClick(type, index);
  }
  return (
    <motion.li
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
      className={"list-group-item text-center"}
      onClick={handleListClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={
        isSelected
          ? isHover
            ? { color: "white", backgroundColor: "lightgreen" }
            : { color: "white", backgroundColor: myTheme }
          : isHover
          ? { color: "white", backgroundColor: "lightgreen" }
          : { color: myTheme }
      }
    >
      <FontAwesomeIcon icon={logo} title={type} />
    </motion.li>
  );
}
