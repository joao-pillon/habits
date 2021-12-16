import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { GoalsProvider } from "./goals";
import { ActivitiesProvider } from "./activities";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <HabitsProvider>
                <GroupsProvider>
                    <GoalsProvider>
                        <ActivitiesProvider>{ children }</ActivitiesProvider>
                    </GoalsProvider>
                </GroupsProvider>
            </HabitsProvider>
        </UserProvider>
    );
};

export default Providers;
