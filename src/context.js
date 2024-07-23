import { useState, createContext } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [loggedUser, setLoggedUser] = useState("");
  const [flag, setFlag] = useState(false);
  const [users, setUsers] = useState([]);

  const containers = {
    user,
    setUser,
    users,
    setUsers,
    loggedUser,
    setLoggedUser,
    flag,
    setFlag,
  };
  return (
    <UserContext.Provider value={containers}>
      {props.children}
    </UserContext.Provider>
  );
};
