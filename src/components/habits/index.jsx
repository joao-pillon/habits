import { useEffect, useState } from "react";
import { useHabits } from "../../providers/habits";
import Update from "../buttonHabit";

const HabitsCard = () => {
  const [habit, setHabit] = useState([]);

  const { getHabits, habits } = useHabits;

  useEffect(() => {
    getHabits();
    setHabit(habits);
  }, [getHabits, habits]);
  return (
    <div>
      {habit.map((hab, index) => {
        return (
          <div key={index}>
            <p>Título:{hab.title}</p>
            <p>Gênero:{hab.category}</p>
            <p>Frequencia:{hab.frequency}</p>
            <button onClick={() => Update(hab.how_much_achieved, "sub")}>
              -
            </button>
            <p>Pagina:{hab.how_much_achieved}</p>
            <button onClick={() => Update(hab.how_much_achieved, "add")}>
              +
            </button>
            <button>Livro</button>
          </div>
        );
      })}
    </div>
  );
};

export default HabitsCard;
