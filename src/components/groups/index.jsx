import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGroups } from "../../providers/groups";
import { Groups, Group, Header } from "./styles";
import DashboardImg from "../../assets/Newhome.png";

const GroupsCard = () => {
  const { getSubGroups, subGroups, unsubscribeGroup } = useGroups();
  useEffect(() => {
    getSubGroups();
  }, []);

  return (

    <>
    <Header>
      <h1>Minhas inscrições</h1>
        <img src={DashboardImg} alt="Background" />
        </Header>
       
    <Groups>


      {subGroups.map((group) => {
        return (
          <>
            <Group>
              <Link key={group.id} to={`/group/${group.id}`}>
                <h1>Nome: {group.name}</h1>
              </Link>
              <p>Descrição: {group.description}</p>
              <p>Gênero: {group.category}</p>
              <p>Criador: {group.creator.username}</p>
              <p>Usuários: {[group.users_on_group].length}</p>
              <button onClick={() => unsubscribeGroup(group.id)}>
                Sair do grupo
              </button>
            </Group>
          </>
        );
      })}
    </Groups>
    </>
  );
};

export default GroupsCard;
