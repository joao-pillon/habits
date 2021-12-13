import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

import * as yup from "yup";
import api from "../../services/api";

// passar prop setUser

const Cadastro = ({ setUser }) => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .max(18, "Máximo de 16 caracteres")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    const request = {
      username: `${data.username}`,
      password: `${data.password}`,
      email: `${data.email}`,
    };
    api
      .post("/users/", request)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso");
        reset();
        setUser(response.data);
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Tente novamente");
      });
  };

  return (
    <>
      <div className="container">
        <button onClick={() => history.push("/login")}>Login</button>
        <button onClick={() => history.push("/")}>Home</button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Cadastro</h4>
          <input placeholder="Usuário" {...register("username")} />
          <div> {errors.username?.message}</div>
          <input placeholder="Senha" {...register("password")} />
          <div>{errors.password?.message}</div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Cadastro;
