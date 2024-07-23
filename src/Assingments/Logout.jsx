import { useContext } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const Navigate = useNavigate();
  const { flag, setFlag } = useContext(UserContext);
  if (flag === true) {
    setFlag(false);
    Navigate("/register");
  }
};

export default Logout;
