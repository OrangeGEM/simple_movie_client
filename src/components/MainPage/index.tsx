import React, { useContext, useLayoutEffect, useState } from 'react';
import { AuthContext } from '../../assets/context/auth.context';
import { useHttp } from '../../assets/hooks/http.hook';
import { MovieInterface } from '../../assets/interfaces/movie.interface';
import Movie from './Movie';
import { Container, Content } from './styled';

export default function MainPage() {
  const [movies, setMovies] = useState<Array<MovieInterface>>();

  const { token } = useContext(AuthContext);
  const { request } = useHttp();

  useLayoutEffect(() => {
    async function getMovies() {
      const data = await request(process.env.REACT_APP_PROXY_URL, "POST", {
        data: {},
        options: {
          api_url: "https://sarzhevsky.com/movies-api/Movies",
          method: "GET",
          token: token
        }
      })
      setMovies(data);
    }
    getMovies();
  }, [])

  return (
    <Container>
      <Content>
        {
          movies ? movies.map((movie, index) => {
            return ( <Movie movie={movie as MovieInterface} /> )
          }) : <></>
        }
      </Content>
    </Container>
  );
}

