import React, { useContext, useLayoutEffect, useState } from 'react';
import { AuthContext } from '../../assets/context/auth.context';
import { useHttp } from '../../hooks/http.hook';
import { MovieInterface } from '../../assets/interfaces/movie.interface';
import Movies from './Movies';
import { Container, Content } from './styled';

export default function MainPage() {
  const [movies, setMovies] = useState<Array<MovieInterface>>();

  const { token } = useContext(AuthContext);
  const { request } = useHttp();

  useLayoutEffect(() => {
    async function getMovies() {
      const data = await request(process.env.REACT_APP_GET_MOVIES_URL, "GET");
      console.log(data);
      setMovies(data);
    }
    getMovies();
  }, [])

  return (
    <Container>
      <Content>
        {
          movies ? movies.map((movie, index) => {
            return ( <Movies movie={movie as MovieInterface} /> )
          }) : <></>
        }
      </Content>
    </Container>
  );
}

