import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/Newhome.png";
import { useGroups } from "../../providers/groups";
import CardGroup from "../../components/cardGroup";
import GroupsCard from "../../components/groups";

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
      <Container>
        <GroupsCard />
      </Container>
    </>
  );
};

export default Group;
