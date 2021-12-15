import { useEffect, useState } from "react";

const ActivitiesCard = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {});
  function achiever() {}

  return (
    <>
      {activities.map((act, index) => {
        return (
          <div key={index}>
            <p>{act.title}</p>
            <p>{act.realization_time}</p>
            <button onClick={() => achiever}>Atividade completa</button>
          </div>
        );
      })}
    </>
  );
};

export default ActivitiesCard;
