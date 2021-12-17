import { useEffect } from "react";
import { useGoals } from "../../providers/goals";
import { useParams } from "react-router-dom";

const GoalsCard = () => {
  const { id } = useParams();
  const { GoalDelete, goals, getGoals } = useGoals();

  useEffect(() => {
    getGoals(id);
  }, []);

  return (
    <>
      {goals.map((goal) => {
        return (
          <div key={goal.id}>
            <p>{goal.title}</p>
            <p>{goal.difficulty}</p>
            <button onClick={() => GoalDelete(goal.id)}>livro completo</button>
          </div>
        );
      })}
    </>
  );
};

export default GoalsCard;
