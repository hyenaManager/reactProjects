import {
  faCross,
  faPaintBrush,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
export default function ThemePen({ showOrHideTheme }) {
  const [isTheme, setIsTheme] = useState(false);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.3 }}
        className="themePen rounded-circle btn btn-warning"
        onClick={() => {
          showOrHideTheme();
          setIsTheme(!isTheme);
        }}
        role="status"
      >
        {isTheme ? (
          <FontAwesomeIcon
            icon={faXmark}
            className=""
            style={{ fontSize: "22px", color: "wheat" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPaintBrush}
            className=""
            style={{ fontSize: "22px", color: "wheat" }}
          />
        )}
      </motion.button>
    </>
  );
}

export function SelectTheme({ setTheme }) {
  const beautifulMixedColors = [
    "aqua", // Lavender
    "#008080", // Teal
    "#37471f", // Coral
    "#6A5ACD", // SlateBlue
    "#FFD700", // Gold
    "#DA70D6", // Orchid
    "#008B8B", // DarkCyan
    "#FA8072", // Salmon
    "#9370DB", // MediumPurple
    "black", // DarkOrange
  ];
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        exit={{ scale: 0 }}
        className="row shadow themeContainer"
      >
        {beautifulMixedColors.map((color) => (
          <div
            key={color}
            style={{
              width: "34px",
              height: "34px",
              backgroundColor: color,
              margin: "2px",
            }}
            onClick={() => setTheme(color)}
            className="col-3 rounded-circle "
          ></div>
        ))}
      </motion.div>
    </>
  );
}
