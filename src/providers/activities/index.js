import { createContext, useContext, useState  } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";


const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
    const history = useHistory();
    const [ activities, setActivities ] = useState([]);
    const [ page, setPage ] = useState(1);

    const getActivities = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token) {
            api.get(`/activities/?group=${ id }`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setActivities(response.data.results);
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Faça login para continuar");
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
            toast.error("Faça login para continuar");
            history.push("/login");
        }
    };

    const nextActivitie = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token) {
            api.get(`/activities/?group=${ id }&page=${page + 1}`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setPage(page + 1);
                setActivities(response.data.results);
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.group){
                    toast.error("Esse grupo não existe");
                }
                else if(error.response.data.detail){
                    toast.error("A paǵina já está no final");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.error("Faça login para continuar");
            history.push("/login");
        }
    };

    const previousActivitie = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.get(`/activities/?group=${ id }&page=${page - 1}`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setPage(page - 1);
                setActivities(response.data.results);
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    history.push("/login");
                }
                else if(error.response.data.group){
                    toast.error("Esse grupo não existe");
                }
                else if(error.response.data.detail){
                    toast.error("A paǵina já está no início");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.error("Faça login para continuar");
            history.push("/login");
        }
    };

    const ActivitieRegister = (data) => {
        const token = localStorage.getItem("@userToken");

        if(token) {
            api.post("/activities/", data, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                getActivities();
                toast.success("Atividades cadastrada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Faça login para continuar");
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
            toast.error("Faça login para continuar");
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
                getActivities();
                toast.success("Atividade atualizada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Faça login para continuar");
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
            toast.error("Faça login para continuar");
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
                getActivities();
                toast.success("Atividade deletada");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Faça login para continuar");
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
            toast.error("Faça login para continuar");
            history.push("/login");
        }
    };

    return (
        <ActivitiesContext.Provider value={ { activities, getActivities, nextActivitie, previousActivitie,
            ActivitieRegister, ActivitieUpdate, ActivitieDelete } }>
            { children }
        </ActivitiesContext.Provider>
    );
};

export const useActivities = () => useContext(ActivitiesContext);
