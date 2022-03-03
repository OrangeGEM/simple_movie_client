import React from 'react';
import { Container, ContentContainer, InputButton, InputContainer, InputField } from './styled';
import { useHttp } from '../../assets/hooks/http.hook';
import axios from 'axios';


export default function LoginPage() {
  const { request } = useHttp();

  const LoginURL = `${process.env.REACT_APP_BASIC_URL}${process.env.REACT_APP_LOGIN_URL}`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;

    const data = {
      username: target.username.value,
      password: target.password.value,
    }
    console.log(data);

    const req = await request(LoginURL, 'POST', data)
    console.log(req)
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

