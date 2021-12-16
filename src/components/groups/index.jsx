import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGroups } from "../../providers/groups";

const GroupsCard = () => {
  const { getSubGroups, subGroups, unsubscribeGroup } = useGroups();
  useEffect(() => {
    getSubGroups();
    console.log(subGroups);
  }, []);

  return (
    <div>
      {subGroups.map((group) => {
        return (
          <>
            <div>
              <Link key={group.id} to={`/group/${group.id}`}>
                <p>Nome:{group.name}</p>
              </Link>
              <p>Descrição:{group.description}</p>
              <p>Gênero:{group.category}</p>
              <p>Criador:{group.creator.username}</p>
              <p>Usuários:{[group.users_on_group].length}</p>
              <button onClick={() => unsubscribeGroup(group.id)}>
                Sair do grupo
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GroupsCard;
