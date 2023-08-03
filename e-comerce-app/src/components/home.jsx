import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Catagories from "/src/components/catagories";
import Items from "/src/components/items";
// import { myDatas } from "./components/datas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import reactLogo from "/src/assets/react.svg";

export default function Home({
  requestCata,
  addNewCart,
  removeCart,
  pureData,
  changeCata,
  selectedList,
  changeNav,
}) {
  useEffect(() => changeNav("home"));

  return (
    <>
      <motion.div
        className="components container-fluid row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <aside className="col-3">
          <Catagories onListClick={changeCata} selectedList={selectedList} />
        </aside>
        <div className="taskContainer col">
          <Items
            cataType={requestCata}
            addCart={addNewCart}
            removeCart={removeCart}
            pureData={pureData}
          />
        </div>
      </motion.div>
    </>
  );
}
