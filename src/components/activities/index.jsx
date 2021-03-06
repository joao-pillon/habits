import { useEffect } from "react";
import { useActivities } from "../../providers/activities";
import { useParams } from "react-router-dom";

const ActivitiesCard = () => {
  const { ActivitieDelete, getActivities, activities } = useActivities();
  const { id } = useParams();

  useEffect(() => {
    getActivities(id);
  }, []);

  return (
    <>
      {activities.map((act) => {
        return (
          <div key={act.id}>
            <p>{act.title}</p>
            <p>{act.realization_time}</p>
            <button onClick={() => ActivitieDelete(act.id)}>
              Atividade completa
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ActivitiesCard;
