import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <HabitsProvider>
                <GroupsProvider>
                    { children }
                </GroupsProvider>
            </HabitsProvider>
        </UserProvider>
    );
};

export default Providers;
