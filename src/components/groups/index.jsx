import { useEffect, useState } from "react";
import { useUser } from "../../providers/user";
import api from "../../services/api";

const GroupsCard = () => {
  const [groups, setGroups] = useState([]);
  const { getUser } = useUser;
  const token = getUser;
  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGroups(response);
      })
      .catch((error) => console.log(error));
  });
  const remover = (id) => {
    api.delete(`/groups/${id}/unsubscribe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //adicionar um toastfy dizendo "saida do grupo com sucess"
  };
  return (
    <div>
      {groups.map((group, index) => {
        return (
          <div key={index}>
            <p>nome:{group.name}</p>
            <p>discrição:{group.description}</p>
            <p>categoria:{group.category}</p>
            <p>criador:{group.creator.username}</p>
            {/* <p>usuarios:{[group.users_on_group].length}</p> */}
            <button onClick={remover(group.id)}>sair do grupo</button>
          </div>
        );
      })}
    </div>
  );
};

export default GroupsCard;
