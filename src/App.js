import Routes from "./routes";
import { Toaster } from "react-hot-toast";

import { useUser } from "./providers/user";

const App = () => {
  const { } = useUser();

  return (
    <div className="App">
      <Routes />
      <Toaster position="top-center" reverseOrder={false} 
        toastOptions={ {
          duration: 1500
        } }/>
    </div>
  );
};

export default App;
