import React from 'react';
import { Container, ContentContainer, InputButton, InputContainer, InputField } from './styled';

export default function LoginPage() {

  return (
    <Container>
      <ContentContainer>
        <form>
          <InputContainer>
            Username:
            <InputField name="username" type="name"/>
          </InputContainer>

          <InputContainer>
            Password:
            <InputField name="password" type="password"/>
          </InputContainer>

          <InputButton name="submit" type="submit" value="Sign in"/>
        </form>
      </ContentContainer>
    </Container>
  );
}

