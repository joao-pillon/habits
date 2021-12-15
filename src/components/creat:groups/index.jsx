import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGroups } from "../../providers/groups";

const CreatGroups = ({ setGroup }) => {
  const { groupRegister, groups } = useGroups;

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data) => {
    groupRegister(data);
    setGroup(groups);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Livro" {...register("title")} />
      <input placeholder="Gênero" {...register("category")} />
      <input placeholder="descrição" {...register("description")} />
      <button type="submit">Novo grupo de leitura</button>
    </form>
  );
};

export default CreatGroups;
