import { createContext, useContext  } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";


const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
    const history = useHistory();

    const GoalRegister = (data) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.post("/goals/", data, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.success("Meta cadastrada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.group){
                    toast.error("Esse grupo não existe");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            history.push("/login");
        }
    };

    const GoalUpdate = (data) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.patch(`/goals/${ data.id }/`, data, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.success("Meta atualizada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.detail){
                    toast.error("Essa méta não existe");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            history.push("/login");
        }
    };

    const GoalDelete = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.delete(`/goals/${ id }/`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.success("Meta Deletada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.detail){
                    toast.error("Essa méta não existe");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            history.push("/login");
        }
    };

    return (
        <GoalsContext.Provider value={ { GoalRegister, GoalUpdate, GoalDelete } }>
            { children }
        </GoalsContext.Provider>
    );
};

export const useGoals = () => useContext(GoalsContext);