import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";


const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
    const [ groups, setGroups ] = useState([]);
    const [ subGroups, setSubGroups ] = useState([]);
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
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    setGroups([]);
                    setSubGroups([]);
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
            setSubGroups([]);
            history.push("/login");
        }
    };

    const subscribeGroup = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.post(`/groups/${ id }/subscribe/`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                getSubGroups();
                toast.success("Usuário inscrito");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    setGroups([]);
                    setSubGroups([]);
                    history.push("/login");
                }
                else if(error.response.data.message){
                    toast.error("Você já está nesse grupo");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            setGroups([]);
            setSubGroups([]);
            history.push("/login");
        }
    };

    const unsubscribeGroup = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.delete(`/groups/${ id }/unsubscribe/`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                setSubGroups([ ...subGroups.filter(subGroup => subGroup.id !== id) ]);
                toast.success("Usuário desinscrito");
            })
            .catch(error => {
                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    setGroups([]);
                    setSubGroups([]);
                    history.push("/login");
                }
                else if(error.response.data.message){
                    toast.error("Você não está nesse grupo");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            setGroups([]);
            setSubGroups([]);
            history.push("/login");
        }
    };

    const groupRegister = (datas) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            toast.loading("Espere...");

            api.post("/groups/", datas, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                toast.remove();
                toast.success("Grupo Criado");
            })
            .catch(error => {
                toast.remove();

                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    setGroups([]);
                    setSubGroups([]);
                    history.push("/login");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            setGroups([]);
            setSubGroups([]);
            history.push("/login");
        }
    };

    const groupUpdate = (datas) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            toast.loading("Espere...");

            api.patch(`/groups/${ datas.id }`, datas, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setGroups([ ...groups.map(group => {
                    if(response.data.id === group.id){
                        return response.data;
                    }
                    return group;
                }) ]);
                toast.remove();
                toast.success("Grupo Criado");
            })
            .catch(error => {
                toast.remove();

                if(error.response.data.code){
                    toast.arguments("Faça login para continuar");
                    localStorage.removeItem("@userToken");
                    setGroups([]);
                    setSubGroups([]);
                    history.push("/login");
                }
                else if(error.response.data.message){
                    toast.arguments("Apenas o criador do grupo pode atualizar o grupo");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            setGroups([]);
            setSubGroups([]);
            history.push("/login");
        }
    };

    return (
        <GroupsContext.Provider value={ { groups, subGroups, getGroups, nextGroups, previousGroups, 
            getSubGroups, groupRegister, groupUpdate, subscribeGroup, unsubscribeGroup } }>
            { children }
        </GroupsContext.Provider>
    );
}

export const useGroups = () => useContext(GroupsContext);
