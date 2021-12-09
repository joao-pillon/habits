import Routes from "./routes";
import { Toaster } from "react-hot-toast";

import { useUser } from "./providers/user";

const App = () => {
  return (
    <div className="App">
      <Routes />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
