import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/Newhome.png";
import { useGroups } from "../../providers/groups";
import CardGroup from "../../components/cardGroup";
import Users from "../../components/users";
import GoalsCard from "../../components/goals";
import ActivitiesCard from "../../components/activities";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Div } from "./styles";

import { HeaderContainer, Button1 } from "../Dashboard/styles";
import Header from "../../components/header";

const Group_Id = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);
  const { getGroups, group, getGroupId } = useGroups();
  const { id } = useParams();

  const [txtCategory, setCategory] = useState("");
  const [txtSearch, setSearch] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("@userToken"));
    getGroupId(id);
  }, []);

  return (
    <>
              <HeaderContainer>
            <Header />
            <Button1  onClick={() => history.push("/group")}>Voltar</Button1>
             
          </HeaderContainer>
      {group && (


          
          <Container>
            <GoalsCard />
            <ActivitiesCard />
            <Users users={group.users_on_group} />
          </Container>

      )}
    </>
  );
};

export default Group_Id;
