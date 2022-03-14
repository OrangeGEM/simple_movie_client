import React, { useContext } from 'react';
import { Container, ContentContainer, InputButton, InputContainer, InputField } from './styled';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../assets/context/auth.context';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function LoginPage() {
  const { request } = useHttp();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const PROXY_URL = process.env.REACT_APP_PROXY_URL;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;

    //@ts-ignore
    const submitter = event.nativeEvent.submitter.name;

    const data = {
      email: target.email.value,
      password: target.password.value,
    }

    if (submitter === 'login') {
      const req = await request(process.env.REACT_APP_LOGIN_URL, 'POST', data)
      console.log(req.user);

      if (req) {
        const token = `token ${req.user.token}`
        localStorage.setItem('token', token)
        authContext.login(token);
        navigate('/main')
      }
    } else {
      const req = await request(process.env.REACT_APP_REGISTER_URL, 'POST', data)
      if(req) {
        console.log('Registred');
      }
    }
  }

  return (
    <Container>
      <ContentContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <InputContainer>
            Username:
            <InputField name="email" type="name" />
          </InputContainer>

          <InputContainer>
            Password:
            <InputField name="password" type="password" />
          </InputContainer>

          <InputButton name="login" type="submit" value="SIGN IN" />
          <InputButton name="register" type="submit" value="SIGN UP" />
        </form>
      </ContentContainer>
    </Container>
  );
}

