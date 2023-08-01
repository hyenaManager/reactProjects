import { useContext, useEffect, useState } from "react";
import React from "react";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "./themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCircleInfo,
  faEye,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function OrderList({ orderedList, deleteOrder, changeNav }) {
  const myTheme = useContext(ThemeContext);
  // const [isChecking, setIsChecking] = useState(false);
  const [detailId, setDetailId] = useState(null);
  useEffect(() => changeNav("orderList"));
  function handleBack() {
    setDetailId(null);
  }

  return (
    <>
      <motion.div
        className="orderList container-fluid "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="orderTable ">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" style={{ backgroundColor: myTheme }}>
                  items quantity
                </th>
                <th scope="col" style={{ backgroundColor: myTheme }}>
                  order code
                </th>
                <th scope="col" style={{ backgroundColor: myTheme }}>
                  total price
                </th>
                <th scope="col" style={{ backgroundColor: myTheme }}>
                  user name
                </th>
                <th scope="col" style={{ backgroundColor: myTheme }}>
                  Admin
                </th>
                <th scope="col" style={{ backgroundColor: myTheme }}></th>
              </tr>
            </thead>
            <tbody>
              {orderedList.map((list, index) => (
                <>
                  <tr key={list.orderCode}>
                    <td>{list.quantity}</td>
                    <td>{list.orderCode}</td>
                    <td>{list.totalPrice} kyats</td>
                    <td>{list.user_name}</td>
                    <td>{list.approved ? "Approved" : "pending"}</td>
                    <td>
                      <button
                        className="transparentButton"
                        style={{ color: myTheme, fontSize: "20px" }}
                        onClick={() => setDetailId(index)}
                      >
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          className="transparentButton"
                        />
                      </button>
                    </td>
                  </tr>
                  {detailId === index ? (
                    <CheckOrder
                      order={list}
                      handleDelete={deleteOrder}
                      handleBack={handleBack}
                    />
                  ) : null}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </>
  );
}

function CheckOrder({ order, handleBack, handleDelete }) {
  const myTheme = useContext(ThemeContext);

  return (
    <>
      <div className="confirmWidget-overlay">
        <div
          className="container confirmWidget"
          style={{ border: "4px solid " + myTheme }}
        >
          <div className="reminder">
            <h4 className="text-center">Order code {order.orderCode}</h4>
            <ul className="list-group">
              <li className="list-group-item row">
                <span className="col text-primary">Name</span>
                <span className="col text-primary">Quantity</span>
                <span className="col text-primary">Total price</span>
              </li>
              {order.originalOrder.map((cart) => (
                <li className="list-group-item row" key={cart.name}>
                  <span className="col">{cart.name}</span>
                  <span className="col">{cart.quantity}</span>
                  <span className="col">{cart.price} kyats</span>
                </li>
              ))}
              <li className="list-group-item active">
                Total price + 1000ks delivery fee{" -"}
                <span style={{ color: "gold" }}>
                  {order.used_RDpoints > 0
                    ? order.used_RDpoints + " redeem point used"
                    : null}
                </span>
                = {order.totalPrice} kyats
              </li>
            </ul>
            <div className="buttons mt-2 ">
              <button
                onClick={handleBack}
                className="cancel btn btn-outline-warning"
              >
                back
              </button>
              <button
                className="confirm btn btn-outline-danger"
                onClick={() => handleDelete(order.id, order.used_RDpoints)}
              >
                cancel order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
