import Routes from "./routes";
import { Toaster } from "react-hot-toast";

import { useUser } from "./providers/user";
import GlobalStyle from "./styles/global";

const App = () => {

  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} 
        toastOptions={ {
          duration: 1500
        } }/>
    </div>
  );
};

export default App;
