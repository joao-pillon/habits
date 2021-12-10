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

            api.post("/habits/", { ...datas, user: decode_token.user_id }, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                habitsState([ ...habits, response.data ]);
                toast.remove();
                toast.success("Habito Cadastrado");
            })
            .catch(error => {
                toast.remove();
                if(error.response.data.message){
                    toast.error("Você não tem permissão para editar esse usuário");
                    localStorage.removeItem("@userToken");
                    habitsState([]);
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else {
            toast.arguments("Faça login para continuar");
            habitsState([]);
            history.push("/login");
        }
    };

    const habitsUpdate = (datas) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            toast.loading("Espere...");

            api.patch(`/habits/${ datas.id }`, datas, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                habitsState([ ...habits.map(habit => {
                    if(response.data.id === habit.id){
                        return response.data;
                    }
                    return habit;
                }) ]);
                toast.remove();
                toast.success("Habito atualizado");
            })
            .catch(error => {
                toast.remove();
                if(error.response.data.message){
                    toast.error("Você não tem permissão para editar esse usuário");
                    localStorage.removeItem("@userToken");
                    habitsState([]);
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            habitsState([]);
            history.push("/login");
        }
    }

    const habitsDelete = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            toast.loading("Espere...");

            api.delete(`/habits/${ id }/`,  {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.remove();
                toast.success("Habito deletado");
                habitsState(habits.filter(habit => habit.id !== id));
            })
            .catch(error => {
                toast.remove();

                if(error.response.data.detail){
                    toast.error("Habito não encontrado");
                }
                else if(error.response.data.message){
                    toast.error("Você não tem permissão para editar esse usuário");
                    localStorage.removeItem("@userToken");
                    habitsState([]);
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            habitsState([]);
            history.push("/login");
        }
    }

    const getHabits = () => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.get("/habits/personal/",  {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                habitsState(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        else{
            toast.arguments("Faça login para continuar");
            habitsState([]);
            history.push("/login");
        }
    };
    
    return (
        <HabitsContext.Provider value={ { habits, habitsRegister, habitsUpdate, habitsDelete
            , getHabits } }>
            { children }
        </HabitsContext.Provider>
    );
};

export const useHabits = () => useContext(HabitsContext);
