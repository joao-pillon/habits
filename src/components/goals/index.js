import { useEffect, useState } from "react";

const GoalsCard = () => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {});
  function achiever() {}

  return (
    <>
      {goals.map((goal, index) => {
        return (
          <div key={index}>
            <p>{goal.title}</p>
            <p>{goal.difficulty}</p>
            <button onClick={() => achiever}>livre completo</button>
          </div>
        );
      })}
    </>
  );
};

export default GoalsCard;
