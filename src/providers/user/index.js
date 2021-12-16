import { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";

import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const history = useHistory();

  const userRegister = (datas) => {
    toast.loading("Espere...");

    api
      .post("/users/", datas)
      .then(() => {
        toast.remove();
        history.push("/login");
        toast.success("Usuário Cadastrado");
      })
      .catch((error) => {
        toast.remove();
        if (error.response.data.username) {
          toast.error("Esse nome de usuário já existe");
        } else if (error.response.data.password) {
          toast.error("Senha necessária");
        } else {
          toast.error("Erro, tente novamente mais tarde");
        }
      });
  };

  const userLogin = (datas) => {
    toast.loading("Espere...");

    api
      .post("/sessions/", datas)
      .then((response) => {
        localStorage.setItem("@userToken", response.data.access);
        toast.remove();
        toast.success("Login realizado");
        history.push("/dashboard");
      })
      .catch((error) => {
        toast.remove();
        if (error.response.data.detail) {
          toast.error("Usuário e/ou senha estão errados");
        } else if (error.response.data.password) {
          toast.error("Senha necessária");
        } else {
          toast.error("Erro, tente novamente mais tarde");
        }
      });
  };

  const userUpdate = (datas) => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      toast.loading("Espere...");
      const decode_token = jwt_decode(token);

      api
        .patch(`/users/${decode_token.user_id}/`, datas, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          toast.remove();
          toast.success("Dados atualizados");
          history.push("/");
        })
        .catch((error) => {
          toast.remove();
          if (error.response.data.message) {
            toast.error("Você não tem permissão para editar esse usuário");
            localStorage.removeItem("@userToken");
            setUser(null);
            history.push("/login");
          } else if (error.response.data.username) {
            toast.error("Esse username já existe");
          } else {
            toast.error("Erro, tente novamente mais tarde");
          }
        });
    } else {
      toast.error("Faça login para continuar");
      setUser(null);
      history.push("/login");
    }
  };

  const getUser = () => {
    const token = localStorage.getItem("@userToken");

    if (token) {
      const decode_token = jwt_decode(token);
      api
        .get(`/users/${decode_token.user_id}/`)
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem("@userToken");
          toast.error("Faça login para continuar");
          setUser(null);
        });
    } else {
      toast.error("Faça login para continuar");
      setUser(null);
    }
  };

  const getUserId = (id) => {
    api
      .get(`/users/${id}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = () => {
    api
      .get("/users/")
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextUsers = () => {
    api
      .get(`/users/?page=${page + 1}`)
      .then((response) => {
        setUsers(response.data.results);
        setPage(page + 1);
      })
      .catch((error) => {
        if (error.response.data.detail) {
          toast.error("A paǵina já está no final");
        } else {
          console.log(error);
        }
      });
  };

  const previousUsers = () => {
    api
      .get(`/users/?page=${page - 1}`)
      .then((response) => {
        setUsers(response.data.results);
        setPage(page - 1);
      })
      .catch((error) => {
        if (error.response.data.detail) {
          toast.error("A paǵina já está no início");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        userLogin,
        userRegister,
        userUpdate,
        getUser,
        getUsers,
        getUserId,
        nextUsers,
        previousPage: previousUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
