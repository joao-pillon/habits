import Button from "../../components/button";
import HomeImg from "../../assets/Newhome.png";
import { useGroups } from "../../providers/groups";
import CardGroup from "../../components/cardGroup";
import GroupsCard from "../../components/groups";
import Header from "../../components/header";
import { HeaderContainer } from "../Dashboard/styles";

import { AiOutlineHome } from "react-icons/ai";
import { ButtonDashboard } from "../Home/styles";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Div } from "./styles";

const Group = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);
  const { getGroups, groups } = useGroups();

  const [txtCategory, setCategory] = useState("");
  const [txtSearch, setSearch] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("@userToken"));
    getGroups();
  }, []);

  return (
    <>
      <HeaderContainer>
        <Header />
        <ButtonDashboard>
          <AiOutlineHome onClick={() => history.push("/dashboard")} />
        </ButtonDashboard>
      </HeaderContainer>

        <GroupsCard />
    </>
  );
};

export default Group;
