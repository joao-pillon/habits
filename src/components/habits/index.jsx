import { useEffect, useState } from "react";
import { useUser } from "../../providers/user";
import api from "../../services/api";

const HabitsCard = () => {
  const [habits, setHabits] = useState([]);
  const { getUser } = useUser;
  const token = getUser;
  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response);
      })
      .catch((error) => console.log(error));
  });
  return (
    <div>
      {habits.map((hab, index) => {
        return (
          <div>
            <p>titulo:{hab.title}</p>
            <p>categoria:{hab.category}</p>
            <p>frequencia:{hab.frequency}</p>
            <p>progresso:{hab.how_much_achieved}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HabitsCard;
