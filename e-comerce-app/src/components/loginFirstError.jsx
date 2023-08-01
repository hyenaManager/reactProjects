import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function LoginError({ handleIsLogin, ErrorMessage }) {
  const navigate = useNavigate();
  function loginFirst() {
    return navigate("/setting/login");
  }
  return (
    <>
      <div className="confirmWidget-overlay">
        <motion.div
          initial={{ y: "-200vw" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: "-200vw" }}
          className="container confirmWidget "
        >
          <div className="reminder">
            <h4 className="text-center">{ErrorMessage}</h4>
            <div className="buttons mt-2 ">
              <button
                onClick={() => handleIsLogin(false)}
                className="cancel btn btn-outline-warning"
              >
                cancel
              </button>
              <button
                className="confirm btn btn-outline-success "
                onClick={() => loginFirst()}
              >
                Login
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
