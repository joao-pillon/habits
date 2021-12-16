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
        );
      })}
    </div>
  );
};

export default GroupsCard;
