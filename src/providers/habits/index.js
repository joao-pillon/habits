import { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";

import api from "../../services/api";


const HabitsContext = createContext();

export const HabitsProviders = ({ children }) => {
    const [ habits, habitsState ] = useState([]);

    const history = useHistory();

    const habitsRegister = (datas) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            toast.loading("Espere...");
            const decode_token = jwt_decode(token);
            datas.user = decode_token.user_id;

            api.post("/habits/", datas, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                habitsState([...habits, response.data ]);
                toast.remove();
                toast.success("Habitos Cadastrados");
            })
            .catch(() => {
                toast.remove();
                toast.error("Erro, tente novamente mais tarde");
            });
        } else {
            toast.arguments("Faça login para continuar");
            localStorage.removeItem("@userToken");
            history.push("/login");
        }
    };
    
    return (
        <HabitsContext.Provider value={ { habits, habitsRegister } }>
            { children }
        </HabitsContext.Provider>
    );
};

export const useHabits = () => useContext(HabitsContext);
