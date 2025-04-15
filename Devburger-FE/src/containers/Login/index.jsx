import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from './styles';
import { Button } from '../../components/Button';
import Logo from '../../assets/devburger-logo.svg';

export function Login() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail valido')
        .required('o email é obrigatorio'),
      password: yup
        .string()
        .min(6, 'A senha deve conter no minimo 6 caracteres')
        .required('Digite sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const {data : {token}} = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                navigate('/');
              }, 2000);
              return 'Seja bem vindo(a) 👌';
            },
          },
          error: 'Email ou Senha Incorretos 🤯',
        },
      );

      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast.error('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-dev" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Password</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
