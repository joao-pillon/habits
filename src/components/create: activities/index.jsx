import { useActivites } from "../../providers/activities";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CreateActivites = () => {
  const { ActivitesRegister } = useActivites();

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    ActivitesRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nome da atividade" {...register("title")} />
      <input placeholder="Data e hora" {...register("realization_time")} />
      <button type="submit">Nova atividade</button>
    </form>
  );
};
export default CreateActivites;
