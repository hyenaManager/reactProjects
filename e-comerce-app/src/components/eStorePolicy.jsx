import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./themeContext";

export default function PolicyTerms() {
  const myTheme = useContext(ThemeContext);
  const navigate = useNavigate();
  function backSetting() {
    navigate("/setting");
  }
  return (
    <>
      <div
        className=" d-flex justify-content-start transparentButton"
        onClick={backSetting}
        style={{ maxWidth: "700px", margin: "auto" }}
      >
        <FontAwesomeIcon
          className=""
          icon={faArrowAltCircleLeft}
          style={{ color: myTheme, fontSize: "30px" }}
        />
        back
      </div>
      <div className="policyTerms overflow-auto mb-3">
        <h1 className="text-center">Policy Terms</h1>

        <h2>Shipping Policy</h2>
        <p>
          We offer free standard shipping for all orders within the myanmar.
          Your order will be processed and shipped within 1-3 business days.
          Please allow 3-7 business days for delivery. For international orders,
          shipping costs and delivery times may vary depending on the
          destination country. Customs duties and taxes for international orders
          are the responsibility of the customer.
        </p>

        <h2>Return & Refund Policy</h2>
        <p>
          We want you to be completely satisfied with your purchase. If for any
          reason you are not happy with your order, you can return the item
          within 30 days of receipt for a full refund. The item must be unused
          and in its original condition with all tags and packaging intact. To
          initiate a return, please contact our customer support team, and they
          will guide you through the process. Please note that the customer is
          responsible for return shipping costs unless the item received was
          damaged or incorrect.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          At XYZ Store, we take your privacy seriously. We collect and store
          your personal information, such as name, email address, and shipping
          address, solely for the purpose of processing your orders and
          providing excellent customer service. We do not sell, trade, or share
          your information with third parties without your consent, except as
          required by law. We use secure and encrypted technology to protect
          your data from unauthorized access. By using our website and providing
          your information, you consent to our Privacy Policy.
        </p>

        <h2>Terms of Service</h2>
        <p>
          By placing an order with Hyena Store, you agree to the following Terms
          of Service: All products and prices are subject to change without
          prior notice. We reserve the right to cancel or refuse any order at
          our discretion. Payment must be made in full at the time of purchase.
          We accept major credit cards and PayPal for online transactions. We
          make every effort to display accurate product images and descriptions;
          however, slight variations may occur. Unauthorized use of this website
          may give rise to a claim for damages and/or be a criminal offense.
        </p>
        <div>
          <i style={{ fontSize: "24px", fontFamily: "cursive" }}>
            agree to all the policy terms
          </i>
          <input
            style={{ fontSize: "24px", marginLeft: "7px" }}
            type="checkbox"
            className="form-check-input border border-secondary"
          />
        </div>
      </div>
    </>
  );
}
