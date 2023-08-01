import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCartShopping,
  faCoins,
  faListUl,
  faMarsAndVenusBurst,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "./themeContext";
import { motion } from "framer-motion";

export default function Carts({
  allCarts,
  removeCart,
  priceUp,
  priceDown,
  totalPrice,
  addNewOrder,
  changeNav,
  redeemPoints,
  setRedeemPoints,
}) {
  const [paying, setPaying] = useState(false);
  const myTheme = useContext(ThemeContext);
  const [usedRedeemPoints, setUsedRedeemPoints] = useState(0);
  function setUsedRDpoints(points) {
    setUsedRedeemPoints(points);
  }
  useEffect(() => changeNav("cart"));
  function isPaying(Boolean) {
    setPaying(Boolean);
  }
  const tableTheme = { backgroundColor: myTheme, color: "white" };
  const confirmNoti = paying && (
    <ConfirmWidget
      isPaying={isPaying}
      addNewOrder={addNewOrder}
      allCarts={allCarts}
      totalPrice={totalPrice - usedRedeemPoints * 100}
      setRedeemPoints={setRedeemPoints}
      points={usedRedeemPoints}
    />
  ); //this widget pop up to confirm the user's order
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="mainDiv"
        style={paying ? { pointerEvents: "none", zIndex: "-1" } : null}
      >
        <div className=" row cart-table">
          <div className="col itemTable">
            <table className="table text-center">
              <thead className="" style={{ height: "40px" }}>
                <tr>
                  <th scope="col" style={tableTheme}>
                    #
                  </th>
                  <th scope="col" style={tableTheme}>
                    icon
                  </th>
                  <th scope="col" style={tableTheme}>
                    name
                  </th>
                  <th scope="col" style={tableTheme}>
                    price
                  </th>
                  <th scope="col" style={tableTheme}>
                    quantity
                  </th>
                  <th scope="col" style={tableTheme}></th>
                </tr>
              </thead>
              <tbody>
                {allCarts.map((cart, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="img-column">
                      <img
                        src={`${cart.icon}`}
                        alt="icon"
                        className="img-fluid img-thumbnail"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </td>
                    <td className="">{cart.name}</td>
                    <td>{cart.price}</td>
                    <Modifier
                      cart={cart}
                      onPlusClick={priceUp}
                      onMinusClick={priceDown}
                    />
                    <td>
                      <button
                        className="transparentButton"
                        onClick={() => removeCart(cart)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "red" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {allCarts.length < 1 && (
              <h1 className="container text-center " style={{ color: myTheme }}>
                Cart <FontAwesomeIcon icon={faCartShopping} /> is empty :)
                <br />
                <span>
                  Your orders my be in the order list{" "}
                  <FontAwesomeIcon icon={faListUl} />
                </span>
              </h1>
            )}
          </div>
          <div className={allCarts.length > 0 ? "col" : "d-none"}>
            <Cashier
              totalPrice={totalPrice}
              isPaying={isPaying}
              redeemPoints={redeemPoints}
              setRedeemPoints={setUsedRDpoints}
            />
          </div>
        </div>
        {confirmNoti}
      </motion.div>
    </>
  );
}

function Modifier({ cart, onPlusClick, onMinusClick }) {
  return (
    <>
      <td className="quantity-cell ">
        <div className="input-group quantity-container">
          <div className="input-group-prepend">
            <button
              className="btn btn-warning"
              type="button"
              id="reduceButton"
              onClick={() => onMinusClick(cart)}
            >
              -
            </button>
          </div>

          <input
            style={{ margin: "auto", width: "30px", padding: "2px" }}
            type="text"
            className="form-control text-center"
            value={cart.quantity}
            id="valueInput"
            disabled
          />

          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              id="addButton"
              onClick={() => onPlusClick(cart)}
            >
              +
            </button>
          </div>
        </div>
      </td>
    </>
  );
}
function Cashier({ totalPrice, isPaying, redeemPoints, setRedeemPoints }) {
  const [addedRedeemPoints, setAddedRedeemPoints] = useState(0);
  const [isRedeem, setIsRedeem] = useState(false);
  function handleRedeem(Boolean) {
    setIsRedeem(Boolean);
  }
  function handleAddRedeem() {
    if (addedRedeemPoints < redeemPoints) {
      setAddedRedeemPoints((point) => parseInt(point) + 1);
    }
  }
  function handleRemoveRedeem() {
    if (addedRedeemPoints > 0) {
      setAddedRedeemPoints((point) => parseInt(point) - 1);
    }
  }
  const myTheme = useContext(ThemeContext);
  return (
    <>
      <div className="cashier">
        <h3
          className=" text-center"
          style={{ color: "white", height: "40px", backgroundColor: myTheme }}
        >
          Cashier
        </h3>
        <div className="totalCash list-group">
          <li className="list-group-item LRdisplay">
            <h5>Total price</h5>
            <p>{totalPrice}ks</p>
          </li>
          <li className="list-group-item LRdisplay">
            <h5>Delivery fee</h5>
            <p>1000ks</p>
          </li>

          {isRedeem ? (
            <>
              <li className="list-group-item LRdisplay d-flex justify-content-between border">
                <button
                  className="btn btn-outline-success"
                  style={{ maxWidth: "90px" }}
                  onClick={() => {
                    handleAddRedeem();
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <FontAwesomeIcon icon={faCoins} />
                </button>
                <i>{addedRedeemPoints} point</i>
                <button
                  className="btn btn-outline-warning"
                  style={{ maxWidth: "90px" }}
                  onClick={() => {
                    handleRemoveRedeem();
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                  <FontAwesomeIcon icon={faCoins} />
                </button>
              </li>
              {addedRedeemPoints > 0 ? (
                <li className="list-group-item LRdisplay d-flex justify-content-center">
                  <i style={{ marginRight: "3px" }}>
                    Your redeem point will be deducted to{" "}
                  </i>{" "}
                  {redeemPoints - addedRedeemPoints}{" "}
                  <FontAwesomeIcon
                    icon={faCoins}
                    style={{
                      color: "gold",
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "3px",
                    }}
                  />
                  points
                </li>
              ) : null}
            </>
          ) : null}
          <button
            className="btn btn-success"
            style={{
              maxWidth: "130px",
              margin: "auto",
            }}
            onClick={() => setIsRedeem(!isRedeem)}
          >
            {isRedeem ? "hide redeem" : "show redeem"}
          </button>
        </div>
        <hr />
        <div className="LRdisplay">
          <h2>Total</h2>
          <h4>
            {totalPrice + parseInt(1000) - addedRedeemPoints * 100}
            <span style={{ color: "gold" }}>
              {addedRedeemPoints > 0
                ? "(" + addedRedeemPoints + " redeem points )"
                : null}
            </span>
            ks
          </h4>
        </div>
        <button
          className="btn btn-secondary "
          onClick={() => {
            isPaying(true);
            setRedeemPoints(addedRedeemPoints);
          }}
        >
          Order Now
        </button>
      </div>
    </>
  );
}

function ConfirmWidget({
  isPaying,
  addNewOrder,
  allCarts,
  totalPrice,
  setRedeemPoints,
  points,
}) {
  return (
    <>
      <div className="confirmWidget-overlay">
        <div className="container confirmWidget">
          <div className="reminder">
            <h4 className="text-center">Are you sure to order this</h4>
            <ul className="list-group">
              <li className="list-group-item row">
                <span className="col text-primary">Name</span>
                <span className="col text-primary">Quantity</span>
                <span className="col text-primary">Total price</span>
              </li>
              {allCarts.map((cart) => (
                <li className="list-group-item row" key={cart.name}>
                  <span className="col">{cart.name}</span>
                  <span className="col">{cart.quantity}</span>
                  <span className="col">{cart.price} kyats</span>
                </li>
              ))}
              <li className="list-group-item active">
                Total price + delivery fee -{" "}
                <span style={{ color: "gold" }}>
                  {points > 0 ? points + " redeem point used" : null}
                </span>{" "}
                = {totalPrice + parseInt(1000)} kyats
              </li>
            </ul>
            <div className="buttons mt-2 ">
              <button
                onClick={() => isPaying(false)}
                className="cancel btn btn-outline-warning"
              >
                back
              </button>
              <button
                className="confirm btn btn-outline-success"
                onClick={() => {
                  addNewOrder(points);
                  setRedeemPoints(points);
                  isPaying(false);
                }}
              >
                confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
