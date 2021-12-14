import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { GoalsProvider } from "./goals";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <HabitsProvider>
                <GroupsProvider>
                    <GoalsProvider>
                        { children }
                    </GoalsProvider>
                </GroupsProvider>
            </HabitsProvider>
        </UserProvider>
    );
};

export default Providers;
