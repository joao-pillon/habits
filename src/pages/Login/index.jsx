import { useUser } from "../../providers/user";
import { Button, Container, Form, Input } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginImg from "../../assets/login.png";

const Login = () => {
  const { userLogin } = useUser();

  const schema = yup.object().shape({
    username: yup.string().required("Digite um nome de usuário válido"),
    password: yup.string().required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <img src={LoginImg} alt="menina com livro" />
      <Form onSubmit={handleSubmit(userLogin)}>
        <h1>Login</h1>
        <Input {...register("username")} type="text" placeholder="Usuário" />
        <Input type="password" placeholder="Senha" {...register("password")} />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
