import React, { useContext } from 'react';
import { Container, ContentContainer, InputButton, InputContainer, InputField } from './styled';
import { useHttp } from '../../hooks/http.hook';
import axios from 'axios';
import { AuthContext } from '../../assets/context/auth.context';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  const { request } = useHttp();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const PROXY_URL = process.env.REACT_APP_PROXY_URL;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;

    const data = {
      data: {
        username: target.username.value,
        password: target.password.value,
        grant_type: "password"
      },
      options: {
        api_url: "https://sarzhevsky.com/movies-api/Login",
        method: "POST"
      }
    }
    console.log(data);

    const req = await request(PROXY_URL, 'POST', data)
    if(req) {
      req.token_type = "Bearer"
      const token = `${req.token_type} ${req.access_token}`;
      localStorage.setItem('token', token)
      authContext.login(token);
      navigate('/main')
    }
  }

  return (
    <Container>
      <ContentContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <InputContainer>
            Username:
            <InputField name="username" type="name" />
          </InputContainer>

          <InputContainer>
            Password:
            <InputField name="password" type="password" />
          </InputContainer>

          <InputButton name="submit" type="submit" value="Sign in" />
        </form>
      </ContentContainer>
    </Container>
  );
}

