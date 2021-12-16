import { Section, Card, DivButtons } from "./styles";

import { useEffect, useState } from "react";
import { useHabits } from "../../providers/habits";
import Update from "../buttonHabit";

const HabitsCard = () => {
  const [habit, setHabit] = useState([]);

  const { getHabits, habits, habitsUpdate, habitsDelete } = useHabits();

  useEffect(() => {
    getHabits();
    setHabit(habits);
  }, [getHabits, habits]);
  return (
    <Section>
      {habit.map((hab, index) => {
        return (
          <Card key={index}>
            <div>
              <h2>Título:{hab.title}</h2>
              <p>Gênero:{hab.category}</p>
              <p>Frequencia:{hab.frequency}</p>
            </div>
            <DivButtons>
              <button
                onClick={() => Update(hab.how_much_achieved, "sub", hab.id, habitsUpdate)}
              >
                -
              </button>
              <p>Pagina: {hab.how_much_achieved}</p>
              <button onClick={() => Update(hab.how_much_achieved, "add", hab.id, habitsUpdate)}>
                +
              </button>
            </DivButtons>
            <button onClick={ () => habitsDelete(hab.id)}>Deletar</button>
          </Card>
        );
      })}
    </Section>
  );
};

export default HabitsCard;
