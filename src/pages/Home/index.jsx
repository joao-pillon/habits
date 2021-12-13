import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/home.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={HomeImg} alt="Livro" />
      <div>
        <Button click={() => history.push("/login")}>Login</Button>
        <Button click={() => history.push("/signup")}>Register</Button>
      </div>
    </Container>
  );
};

export default Home;
