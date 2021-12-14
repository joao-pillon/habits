import { createContext, useContext  } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";


const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const history = useHistory();

    const ActivitieRegister = (data) => {
        const token = localStorage.getItem("@userToken");

        if(token) {
            api.post("/activities/", data, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.success("Atividades cadastrada");
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

    const ActivitieUpdate = (data) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.patch(`/activities/${ data.id }/`, data, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.success("Atividade atualizada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.detail){
                    toast.error("Essa atividade não existe");
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

    const ActivitieDelete = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.delete(`/activities/${ id }/`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.success("Atividade deletada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.detail){
                    toast.error("Essa atividade não existe");
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
        <ActivitiesContext.Provider value={ { ActivitieRegister, ActivitieUpdate, ActivitieDelete } }>
            { children }
        </ActivitiesContext.Provider>
    );
};

export const useActivities = () => useContext(ActivitiesContext);
