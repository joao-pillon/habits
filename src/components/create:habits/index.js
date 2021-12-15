import { useHabits } from "../../providers/habits";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CreatHabits = ({ setHabit }) => {
  const { habitsRegister, getHabits, habits } = useHabits;

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    habitsRegister(data);
    getHabits();
    setHabit(habits);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Livro" {...register("title")} />
      <input placeholder="Gênero" {...register("category")} />
      <input placeholder="Tamanho" {...register("difficulty")} />
      <input placeholder="Frequencia" {...register("frequency")} />
      <input placeholder="Páginas" {...register("how_much_achieved")} />
      <button type="submit">Nova leitura</button>
    </form>
  );
};

export default CreatHabits;
