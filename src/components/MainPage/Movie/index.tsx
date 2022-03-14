import React, { useContext, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieInterface } from '../../../assets/interfaces/movie.interface';
import { Container } from './styled';

export default function Movie() {
    const location = useLocation();

    //@ts-ignore
    const movie = location.state.movie as MovieInterface;
    

    return (
        <Container>
            Movie {movie.id}
        </Container>
    );
}

