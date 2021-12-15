import useGoals from "../../providers/goals";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CreatGoals = () => {
  const { GoalRegister } = useGoals;

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    GoalRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Meta" {...register("title")} />
      <input placeholder="dificuldade" {...register("difficulty")} />
      <input
        placeholder="ate onde chegou?"
        {...register("how_much_achieved")}
      />
      <button type="submit">Criar meta</button>
    </form>
  );
};

export default CreatGoals;
