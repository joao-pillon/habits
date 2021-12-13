import { useHabits } from "../../providers/habits";

const Update = (number, type) => {
  const { habitsUpdate } = useHabits;
  if (type === "add") {
    const newNumber = number + 1;
    const data = {
      achieved: false,
      how_much_achieved: newNumber,
    };
    habitsUpdate(data);
  } else if (number > 0) {
    const newNumber = number - 1;
    const data = {
      achieved: false,
      how_much_achieved: newNumber,
    };
    habitsUpdate(data);
  }
};

export default Update;
