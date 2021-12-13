import { createContext } from "react";

import api from "../../services/api";

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
    return (
        <GroupsContext.Provider>
            { children }
        </GroupsContext.Provider>
    );
}