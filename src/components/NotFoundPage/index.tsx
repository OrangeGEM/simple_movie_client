import React from 'react';
import { BigNumber, Container, NotFoundDescription } from './styled';

export default function NotFoundPage() {

  return (
    <Container>
      <BigNumber> 404 </BigNumber>
      <NotFoundDescription> Page not found </NotFoundDescription>
    </Container>
  );
}

