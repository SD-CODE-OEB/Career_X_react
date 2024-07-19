import { useState, createContext } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [loggedUser, setLoggedUser] = useState("");
  const [users, setUsers] = useState([]);

  const containers = {
    user,
    setUser,
    users,
    setUsers,
    loggedUser,
    setLoggedUser,
  };
  return (
    <UserContext.Provider value={containers}>
      {props.children}
    </UserContext.Provider>
  );
};
