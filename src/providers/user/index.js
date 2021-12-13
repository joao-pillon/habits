import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

import api from "../../services/api";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, userState] = useState({});

  const userLogin = (datas) => {
    api
      .post("/sessions/", datas)
      .then((response) => {
        localStorage.setItem("@userToken", response.data.access);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      const decode_token = jwt_decode(token);
      api
        .get(`/users/${decode_token.user_id}/`)
        .then((response) => {
          console.log(response.data);
          userState(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <UserContext.Provider value={{ user, userLogin, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
