import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/Newhome.png";
import { useGroups } from "../../providers/groups";
import CardGroup from "../../components/cardGroup";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Div, Search, Input, Section } from "./styles";

const Home = () => {
  const history = useHistory();
  const [ token, setToken ] = useState(null);
  const { getGroups, groups } = useGroups();

  const [ txtCategory, setCategory ] = useState("");
  const [ txtSearch, setSearch ] = useState("");


  useEffect(() => {
    setToken(localStorage.getItem("@userToken"));
    getGroups(txtCategory, txtSearch);
  }, []);


  return (
    <>
      {!token && 
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
      }
      {token && 
        <>
          <Search>
            <Input placeholder="Pesquisar por categoria" value={ txtCategory } onChange={ (e) => {
              setCategory(e.target.value);
            } } />
            <Input placeholder="Pesquisar por nome" value={ txtSearch } onChange={ (e) => {
              setSearch(e.target.value);
            } } />
          </Search>
          <Section>
            { groups.map(group => (
              <CardGroup key={ group.id } group={ group } />
            )) }
          </Section>
        </>
      }
    </>
  );
};

export default Home;
