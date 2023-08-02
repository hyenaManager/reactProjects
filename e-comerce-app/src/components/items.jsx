import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { Suspense, useMemo, useTransition } from "react";
import {
  faCartShopping,
  faSpinner,
  faCircleInfo,
  faMagnifyingGlass,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUser, ThemeContext } from "./themeContext";
import LoginError from "./loginFirstError";

export default function Items({ cataType, addCart, removeCart, pureData }) {
  const [addWithoutLogin, setAddWithoutLogin] = useState(false);
  const [filterText, setFilterText] = useState("");

  const myTheme = useContext(ThemeContext);
  const [filteredImages, setFilteredImages] = useState(pureData);
  function handleIsLogin(boolean) {
    setAddWithoutLogin(boolean);
  }
  function handleSearch() {
    setFilteredImages(
      pureData.filter((data) =>
        data.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }

  function shouldHiddenOrAll(type) {
    //hiding the item in the coditions of the catagory type
    if (cataType === "all") {
      return true;
    } else {
      return type === cataType; //e.g cataType === fruits, show only the item that type is fruit
    }
  }

  const imgItems = filteredImages.map((data, index) => (
    <Suspense
      fallback={
        <div style={{ height: "320px" }} className="col-4 shadow text-center">
          loading....
        </div>
      }
      key={index}
    >
      <Images
        imgData={data}
        addCart={addCart}
        removeCart={removeCart}
        hidden={shouldHiddenOrAll(data.type)}
        handleIsLogin={handleIsLogin}
        placeholderSrc={"/public/svgs/loadingAnimated.gif"}
      />
    </Suspense>
  ));

  return (
    <div className="itemContainer rounded">
      <div
        className="searchBar mb-2 p-2"
        style={{ backgroundColor: myTheme, alignItems: "center" }}
      >
        <form className="d-flex">
          <button
            className="btn me-1 rounded refreshButton"
            type="button"
            onClick={() => {
              setFilteredImages(pureData);
              setFilterText("");
            }}
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
          <input
            className="form-control me-1"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button
            className="btn btn-outline-success searchButton"
            type="button"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div className="row" style={{ overflowX: "hidden" }}>
        {imgItems}
        {filteredImages.length > 0 ? null : (
          <i className="text-center">There is no such item</i>
        )}
      </div>
      {addWithoutLogin ? (
        <LoginError
          handleIsLogin={handleIsLogin}
          ErrorMessage={"Login first to purchase"}
        />
      ) : null}
    </div>
  );
}

function Images({ imgData, addCart, hidden, handleIsLogin, placeholderSrc }) {
  const currentUser = useContext(CurrentUser);
  const [imgSrc, setImgSrc] = useState(placeholderSrc || imgData.source);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  function userExist() {
    if (currentUser !== null) {
      return addCart(imgData);
    }
    handleIsLogin(true);
  }
  useEffect(() => {
    const img = new Image();
    img.src = imgData.source;
    img.onload = () => {
      setImgSrc(imgData.source);
    };
  }, [imgData.source]);

  const myTheme = useContext(ThemeContext);
  const buttonDisplay = (
    <button
      className="transparentButton"
      title="add to cart"
      onClick={() => userExist()}
    >
      <motion.div whileHover={{ scale: 1.4 }} whileTap={{ scale: 1.3 }}>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "whitesmoke" }}
        />
      </motion.div>
    </button>
  );

  return (
    <>
      <div
        className={" col-4 mb-3 image-container " + (hidden ? null : "d-none")} //if hidden is true show image else display none image
        key={imgData.name}
      >
        <div className="">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={imgSrc}
            alt={imgData.source}
            className={"img-fluid rounded " + `${customClass}`}
          />
          <span
            style={{
              position: "absolute",
              top: "2%",
              right: "16px",
              fontSize: "25px",
              color: "white",
              cursor: "pointer",
            }}
            title="item Detail"
          >
            <Link
              to={"detail/" + imgData.id}
              style={{
                textDecoration: "none",
                color: myTheme,
              }}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="rounded-circle p-1"
                style={{ backgroundColor: "white" }}
              />
            </Link>
          </span>
        </div>

        <div
          className="cartingFunction rounded mt-1 text-center"
          style={{ backgroundColor: myTheme }}
        >
          <div
            className="name "
            style={{
              fontFamily: "cursive",
              color: "white",
            }}
          >
            {imgData.name}
          </div>
          <div
            className="price rounded"
            style={{
              fontFamily: "cursive",
              color: "white",
              border: "1px solid white",
              padding: "2px",
            }}
          >
            {imgData.value} kyats
          </div>
          <div className="theee">{buttonDisplay}</div>
        </div>
      </div>
    </>
  );
}
