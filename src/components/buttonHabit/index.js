//Botão feito para aumentar ou diminuir a pagina do livro

import { useHabits } from "../../providers/habits";

const Update = (number, type, id) => {
  const { habitsUpdate } = useHabits;
  if (type === "add") {
    const newNumber = number + 1;
    const data = {
      achieved: false,
      how_much_achieved: newNumber,
      id: id,
    };
    habitsUpdate(data);
  } else if (number > 0) {
    const newNumber = number - 1;
    const data = {
      achieved: false,
      how_much_achieved: newNumber,
      id: id,
    };
    habitsUpdate(data);
  }
};

export default Update;
