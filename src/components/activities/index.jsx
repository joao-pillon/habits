import { useEffect, useState } from "react";
import { useActivites } from "../../providers/activities";
import { useGroups } from "../../providers/groups";

const ActivitiesCard = () => {
  const [activitiesList, setActivities] = useState([]);
  const { getSubGroups, groups } = useGroups;
  const { ActivitieDelete } = useActivites;

  useEffect(() => {
    getSubGroups();
    setActivities(groups);
  }, [getSubGroups, groups]);

  return (
    <>
      {activitiesList.activities.map((act) => {
        return (
          <div key={act.id}>
            <p>{act.title}</p>
            <p>{act.realization_time}</p>
            <button onClick={ActivitieDelete(act.id)}>
              Atividade completa
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ActivitiesCard;
