import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";


const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
    const [ groups, setGroups ] = useState(null);
    const [ subGroups, setSubGroups ] = useGroups(null);
    const [ page, setPage ] = useState(1);

    const history = useHistory();

    const getGroups = (category, search) => {
        api.get(`/groups/?category${ (category)? `=${category}`: "" }&search${ (search)? `=${search}`: "" }`)
        .then(response => {
            setGroups(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const nextGroups = (category, search) => {
        api.get(`/groups/?page=${ page + 1 }&category${ (category)? `=${category}`: "" }&search${ (search)? `=${search}`: "" }`)
        .then(response => {
            setGroups(response.data.results);
            setPage(page + 1);
        })
        .catch(error => {
            if(error.response.data.detail){
                toast.error("A paǵina já está no final");
            }
            else{
                console.log(error);
            }
        });
    };

    const previousGroups = (category, search) => {
        api.get(`/groups/?page=${ page - 1 }&category${ (category)? `=${category}`: "" }&search${ (search)? `=${search}`: "" }`)
        .then(response => {
            setGroups(response.data.results);
            setPage(page - 1);
        })
        .catch(error => {
            if(error.response.data.detail){
                toast.error("A paǵina já está no final");
            }
            else{
                console.log(error);
            }
        });
    };

    const getSubGroups = () => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.get("/groups/subscriptions/", {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setSubGroups(response.data);
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.error("Você não tem permissão para cadastrar nesse usuário");
                    localStorage.removeItem("@userToken");
                    setGroups([]);
                    history.push("/login");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else {
            toast.arguments("Faça login para continuar");
            setGroups([]);
            history.push("/login");
        }
    };

    return (
        <GroupsContext.Provider value={ { groups, subGroups, getGroups, nextGroups, previousGroups, getSubGroups } }>
            { children }
        </GroupsContext.Provider>
    );
}

export const useGroups = () => useContext(GroupsContext);
