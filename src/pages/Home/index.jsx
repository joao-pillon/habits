import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/Newhome.png";
import { useGroups } from "../../providers/groups";
import { useUser } from "../../providers/user";
import CardGroup from "../../components/cardGroup";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineHome,
} from "react-icons/ai";

import { Div, Search, Input, Section, ButtonDashboard } from "./styles";

import { HeaderContainer, Button1 } from "../Dashboard/styles";
import Header from "../../components/header"



const Home = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);
  const {
    getGroups,
    groups,
    nextGroups,
    previousGroups,
    subscribeGroup,
    unsubscribeGroup,
  } = useGroups();
  const { getUser, user } = useUser();

  const [txtCategory, setCategory] = useState("");
  const [txtSearch, setSearch] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("@userToken"));
    getUser(txtCategory, txtSearch);
    getGroups(txtCategory, txtSearch);
  }, [txtCategory, txtSearch]);

  const onSubscribe = (id) => {
    subscribeGroup(id);
    setCategory("");
    setSearch("");
  };

  const onUnsubscribe = (id) => {
    unsubscribeGroup(id);
    setCategory("");
    setSearch("");
  };

  return (
    <>
      {!token && (
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
      )}
      {token && (
        
        <>
                  <HeaderContainer>
        <Header />
        <ButtonDashboard> 
          <AiOutlineHome onClick={() => history.push("/dashboard")} />
        </ButtonDashboard>
      </HeaderContainer>
          <Search>
            
            <Input
              placeholder="Pesquisar por categoria"
              value={txtCategory}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <Input
              placeholder="Pesquisar por nome"
              value={txtSearch}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Search>
          <Section>

            {groups.map((group) => (
              <CardGroup
                key={group.id}
                user={user}
                group={group}
                subscribe={() => onSubscribe(group.id)}
                unsubscribe={() => onUnsubscribe(group.id)}
              />
            ))}
          </Section>
          <Section>
            <button onClick={() => previousGroups(txtCategory, txtSearch)}>
              <AiFillCaretLeft />
            </button>
            <button onClick={() => nextGroups(txtCategory, txtSearch)}>
              <AiFillCaretRight />
            </button>
          </Section>
        </>
      )}
    </>
  );
};

export default Home;
