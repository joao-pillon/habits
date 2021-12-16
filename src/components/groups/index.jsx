import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> feature/movimentaçãoDinamica
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
<<<<<<< HEAD
      {group.map((group) => {
        return (
          <Link key={group.id} to={`/group/${group.id}`}>
            <div>
              <p>nome:{group.name}</p>
              <p>discrição:{group.description}</p>
              <p>Gênero:{group.category}</p>
              <p>criador:{group.creator.username}</p>
              <p>usuarios:{[group.users_on_group].length}</p>
              <button onClick={() => unsubscribeGroup(group.id)}>
                sair do grupo
              </button>
            </div>
          </Link>
=======
      {group.map((group, index) => {
        return (
          <div key={index}>
            <p>nome:{group.name}</p>
            <p>discrição:{group.description}</p>
            <p>Gênero:{group.category}</p>
            <p>criador:{group.creator.username}</p>
            <p>usuarios:{[group.users_on_group].length}</p>
            <button onClick={() => unsubscribeGroup(group.id)}>
              sair do grupo
            </button>
          </div>
>>>>>>> feature/movimentaçãoDinamica
        );
      })}
    </div>
  );
};

export default GroupsCard;
