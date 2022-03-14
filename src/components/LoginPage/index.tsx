import React from 'react';
import { Container, ContentContainer, InputButton, InputContainer, InputField } from './styled';
import { useHttp } from '../../hooks/http.hook';
import axios from 'axios';


export default function LoginPage() {
  const { request } = useHttp();

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
    req.token_type = "Bearer"
    localStorage.setItem('token', `${req.token_type} ${req.access_token}`)
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

