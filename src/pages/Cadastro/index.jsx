import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { Button, Container, Form, Input } from "./styles";
import CadastroImg from "../../assets/cadastro.png";
import { useUser } from "../../providers/user";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// passar prop setUser

const Cadastro = () => {
  const { userRegister } = useUser();
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    if (token) {
      history.push("/dashboard");
    }
  });

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .max(18, "Máximo de 16 caracteres")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      // .matches(
      //   /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //   "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      // )
      .required("Senha obrigatória"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    userRegister(data);
  };
  
  return (
    <Container className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro</h1>
        <div>
          <Input placeholder="Usuário" {...register("username")} />
          <span> {errors.username?.message}</span>
          <Input placeholder="Email" {...register("email")} />
          <span> {errors.email?.message}</span>
          <Input placeholder="Senha" {...register("password")} />
          <span>{errors.password?.message}</span>
          <Button type="submit">Enviar</Button>
        </div>
        <p>
          Já possui uma conta? Faça seu <Link to="/login">login!</Link>
        </p>
      </Form>
      <img src={CadastroImg} alt="menina com livro" />
    </Container>
  );
};

export default Cadastro;
