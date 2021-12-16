import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useActivites } from "../../providers/activities";
import { useParams } from "react-router-dom";

const ActivitiesCard = () => {
  const [activitiesList, setActivities] = useState([]);
  const { ActivitieDelete, getActivities, activities } = useActivites();
  const { id } = useParams();

  useEffect(() => {
    getActivities(id);
    setActivities(activities);
  }, []);

  return (
    <>
      {activitiesList.map((act) => {
        return (
          <div key={act.id}>
            <p>{act.title}</p>
            <p>{act.realization_time}</p>
            <button onClick={ActivitieDelete(act.id)}>
              Atividade completa
            </button>
=======

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
>>>>>>> feature/movimentaçãoDinamica
          </div>
        );
      })}
    </>
  );
};

export default ActivitiesCard;
