import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <HabitsProvider>
                { children }
            </HabitsProvider>
        </UserProvider>
    );
};

export default Providers;
