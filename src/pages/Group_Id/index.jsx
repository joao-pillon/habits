import Button from "../../components/button";
import Container from "../../components/container";
import HomeImg from "../../assets/Newhome.png";
import { useGroups } from "../../providers/groups";
import CardGroup from "../../components/cardGroup";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Div } from "./styles";

const Group_Id = () => {
  const history = useHistory();
  const [ token, setToken] = useState(null);
  const { getGroupsId, groups } = useGroups();

  const [txtCategory, setCategory] = useState("");
  const [txtSearch, setSearch] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("@userToken"));
    getGroupsId();
  }, []);

  return <>{!token && <Container>
    </Container>}</>;
};

export default Group_Id;
