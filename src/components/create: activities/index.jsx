import { useActivites } from "../../providers/activities";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";

const CreateActivites = () => {
  const { ActivitesRegister } = useActivites();
  const { id } = useParams();

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const datas = {
      title: `${data.title}`,
      realization_time: `${data.realization_time}`,
      group: `${id}`,
    };
    ActivitesRegister(datas);
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
