import { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import jwt_decode from "jwt-decode";

import api from "../../services/api";


const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
    const [ habits, setHabits ] = useState([]);
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
                setHabits([ ...habits, response.data ]);
                toast.remove();
                toast.success("Habito Cadastrado");
            })
            .catch(error => {
                toast.remove();

                if(error.response.data.code){
                    toast.error("Você não tem permissão para cadastrar nesse usuário");
                    localStorage.removeItem("@userToken");
                    setHabits([]);
                    history.push("/login");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else {
            toast.error("Faça login para continuar");
            setHabits([]);
            history.push("/login");
        }
    };

    const habitsUpdate = (datas) => {
        const token = localStorage.getItem("@userToken");
        
        if(token){
            toast.loading("Espere...");

            api.patch(`/habits/${ datas.id }/`, datas, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setHabits([ ...habits.map(habit => {
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
                
                if(error.response.data.code){
                    toast.error("Você não tem permissão para editar esse habito");
                    localStorage.removeItem("@userToken");
                    setHabits([]);
                    history.push("/login");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.error("Faça login para continuar");
            setHabits([]);
            history.push("/login");
        }
    };

    const habitsDelete = (id) => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.delete(`/habits/${ id }/`, {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(() => {
                toast.remove();
                toast.success("Habito deletado");
                setHabits(habits.filter(habit => habit.id !== id));
            })
            .catch(error => {
                toast.remove();

                if(error.response.data.code){
                    toast.error("Habito não encontrado");
                }
                else if(error.response.data.message){
                    toast.error("Você não tem permissão para deletar esse hábito");
                    localStorage.removeItem("@userToken");
                    setHabits([]);
                    history.push("/login");
                }
                else{
                    toast.error("Erro, tente novamente mais tarde");
                }
            });
        }
        else{
            toast.error("Faça login para continuar");
            setHabits([]);
            history.push("/login");
        }
    };

    const getHabits = () => {
        const token = localStorage.getItem("@userToken");

        if(token){
            api.get("/habits/personal/",  {
                headers: {
                    Authorization:`Bearer ${ token }`
                }
            })
            .then(response => {
                setHabits(response.data);
            })
            .catch(error => {
                toast.error("Faça login para continuar");
                history.push("/login");
                console.log(error);
            });
        }
        else{
            toast.error("Faça login para continuar");
            setHabits([]);
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