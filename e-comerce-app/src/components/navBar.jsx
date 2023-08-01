import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faGear,
  faHouse,
  faListUl,
  faMagnifyingGlass,
  faPaperPlane,
  faRightFromBracket,
  faRightToBracket,
  faPalette,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import reactLogo from "/src/assets/react.svg";
import { Link } from "react-router-dom";
export default function NavigationBar({
  allCarts,
  user,
  filterText,
  changeFilterText,
  onLogout,
  setTheme,
  myTheme,
}) {
  const loginOrOut =
    user !== null ? (
      <>
        <div
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            onLogout();
          }}
        >
          <span>Logout </span>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: myTheme }}
          />
        </div>
      </>
    ) : (
      <>
        <Link to={"login"} className="messageLink">
          <span className="messageLink">Login </span>
          <FontAwesomeIcon icon={faRightToBracket} style={{ color: myTheme }} />
        </Link>
      </>
    );
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <FontAwesomeIcon
              icon={faStore}
              style={{ fontSize: "31px", color: myTheme }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <button className="nav-item-link transparentButton ">
                  <Link to={"/"}>
                    <FontAwesomeIcon
                      icon={faHouse}
                      style={{ fontSize: "22px", color: myTheme }}
                      title="Home"
                    />
                  </Link>
                </button>
              </li>
              <li className="notification-container nav-item">
                <button className="cartButton">
                  <Link to={"Cart"}>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ fontSize: "22px", color: myTheme }}
                      title="cart"
                    />
                  </Link>
                </button>
                {allCarts.length > 0 && (
                  <span className="notification-badge">{allCarts.length}</span>
                )}
              </li>
              <li className="nav-item ">
                <button className="nav-item-link transparentButton ">
                  <Link to={"Order-list"}>
                    <FontAwesomeIcon
                      icon={faListUl}
                      style={{ fontSize: "22px", color: myTheme }}
                      title="order list"
                    />
                  </Link>
                </button>
              </li>
              <li className="nav-item ">
                <button className="nav-item-link transparentButton ">
                  <Link to={"inbox"}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ fontSize: "22px", color: myTheme }}
                      title="inbox-message"
                    />
                  </Link>
                </button>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faGear}
                    style={{ fontSize: "22px", color: myTheme }}
                    title="setting"
                  />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"message"} className="dropdown-item " href="#">
                      <span className="messageLink">message us</span>
                      <div>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          style={{ color: "green" }}
                        />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      about us
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item">{loginOrOut}</div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown themeChanger">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faPalette}
                    style={{ fontSize: "22px", color: myTheme }}
                    title="setting"
                  />
                </div>
                <ul className="dropdown-menu">
                  <li className="dropdown-item ">
                    <button
                      className="transparentButton"
                      onClick={() => setTheme("aqua")}
                    >
                      <FontAwesomeIcon
                        icon={faPalette}
                        style={{ fontSize: "22px", color: "aqua" }}
                        title="setting"
                      />
                    </button>
                  </li>
                  <li className="dropdown-item ">
                    <button
                      className="transparentButton"
                      onClick={() => setTheme("pink")}
                    >
                      <FontAwesomeIcon
                        icon={faPalette}
                        style={{ fontSize: "22px", color: "pink" }}
                        title="setting"
                      />
                    </button>
                  </li>
                  <li className="dropdown-item ">
                    <button
                      className="transparentButton"
                      onClick={() => setTheme("black")}
                    >
                      <FontAwesomeIcon
                        icon={faPalette}
                        style={{ fontSize: "22px", color: "black" }}
                        title="setting"
                      />
                    </button>
                  </li>
                  <li className="dropdown-item ">
                    <button
                      className="transparentButton"
                      onClick={() => setTheme("yellow")}
                    >
                      <FontAwesomeIcon
                        icon={faPalette}
                        style={{ fontSize: "22px", color: "yellow" }}
                        title="setting"
                      />
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                value={filterText}
                onChange={(e) => changeFilterText(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-success disabled"
                type="button"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
