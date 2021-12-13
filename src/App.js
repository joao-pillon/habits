import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <Routes />
      <Toaster position="top-center" reverseOrder={false} />
      <GlobalStyle />
    </div>
  );
};

export default App;
