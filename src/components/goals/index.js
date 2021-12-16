import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useGoals } from "../../providers/goals";
import { useParams } from "react-router-dom";

const GoalsCard = () => {
  const [goalsList, setGoalsList] = useState([]);
  const { id } = useParams();

  const { GoalDelete, goals, getGoals } = useGoals();

  useEffect(() => {
    getGoals(id);
    setGoalsList(goals);
  }, []);

  return (
    <>
      {goalsList.map((goal) => {
=======
import useGoals from "../../providers/goals";
import { useGroups } from "../../providers/groups";

const GoalsCard = () => {
  const [goalsList, setGoalsList] = useState([]);

  const { getSubGroups, groups } = useGroups;
  const { GoalDelete } = useGoals;

  useEffect(() => {
    getSubGroups();
    setGoalsList(groups);
  }, [getSubGroups, groups]);

  return (
    <>
      {goalsList.goals.map((goal) => {
>>>>>>> feature/movimentaçãoDinamica
        return (
          <div key={goal.id}>
            <p>{goal.title}</p>
            <p>{goal.difficulty}</p>
            <button onClick={GoalDelete(goal.id)}>livro completo</button>
          </div>
        );
      })}
    </>
  );
};

export default GoalsCard;
