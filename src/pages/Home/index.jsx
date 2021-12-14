import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/Newhome.png";
import { useHistory } from "react-router-dom";
import { Div } from "./styles";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={HomeImg} alt="Livro" />
      <Div>
        <div>
          <h1>Reading Habit</h1>
          <p>Uma nova forma de criar o hábito da leitura.</p>
        </div>
        <div>
          <Button click={() => history.push("/login")}>Login</Button>
          <Button click={() => history.push("/signup")}>Register</Button>
        </div>
      </Div>
    </Container>
  );
};

export default Home;
