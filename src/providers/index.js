import { UserProvider } from "./user";
import { HabitsProviders } from "./habits";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProviders>{children}</HabitsProviders>
    </UserProvider>
  );
};

export default Providers;
