import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGroups } from "../../providers/groups";

const GroupsCard = () => {
  const [group, setGroup] = useState([]);

  const { getSubGroups, groups, unsubscribeGroup } = useGroups;
  useEffect(() => {
    getSubGroups();
    setGroup(groups);
  }, [getSubGroups, groups]);
  return (
    <div>
      {group.map((group) => {
        return (
          <Link key={group.id} to={`/group/${group.id}`}>
            <div>
              <p>Nome:{group.name}</p>
              <p>Descrição:{group.description}</p>
              <p>Gênero:{group.category}</p>
              <p>Criador:{group.creator.username}</p>
              <p>Usuários:{[group.users_on_group].length}</p>
              <button onClick={() => unsubscribeGroup(group.id)}>
                Sair do grupo
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GroupsCard;
