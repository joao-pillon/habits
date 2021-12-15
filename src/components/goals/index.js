import { useEffect, useState } from "react";
import { useGoals } from "../../providers/goals";
import { useGroups } from "../../providers/groups";

const GoalsCard = () => {
  const [goalsList, setGoalsList] = useState([]);

  const { getSubGroups, groups } = useGroups();
  const { GoalDelete } = useGoals();

  useEffect(() => {
    getSubGroups();
    setGoalsList(groups);
  }, [getSubGroups, groups]);

  return (
    <>
      {goalsList.goals.map((goal) => {
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
