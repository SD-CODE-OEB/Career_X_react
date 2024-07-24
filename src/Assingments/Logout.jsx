import { useContext } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const Navigate = useNavigate();
  const { setFlag } = useContext(UserContext);
  setFlag(false);
  Navigate("/register");
};

export default Logout;
