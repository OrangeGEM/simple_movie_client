import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieInterface } from '../../../assets/interfaces/movie.interface';
import { Container, Content, DescriptionContainer, DescriptionItem, DescriptionText, TitleText } from './styled';

interface Props {
    movie: MovieInterface;
}
const titles = ["Title", "Year", "Duration", "Rating"];

export default function Movies({ movie }: Props) {
    const navigate = useNavigate();

    function handleClick(id: number) {
        console.log(id);
        navigate('/movie', { state: movie })
    }

    return (
        <Container>
            <Content>
                <img src={movie.posterUrl} style={{height: "auto"}}/>

                <DescriptionContainer onClick={() => handleClick(movie.id)}>
                    <DescriptionItem>
                        <TitleText> Title </TitleText>
                        <DescriptionText> { movie.title } </DescriptionText>
                    </DescriptionItem>

                    <DescriptionItem>
                        <TitleText> Year </TitleText>
                        <DescriptionText> { movie.year } </DescriptionText>
                    </DescriptionItem>

                    <DescriptionItem>
                        <TitleText> Duration </TitleText>
                        <DescriptionText> { movie.duration } </DescriptionText>
                    </DescriptionItem>

                    <DescriptionItem>
                        <TitleText> Rating </TitleText>
                        <DescriptionText> { movie.rating } </DescriptionText>
                    </DescriptionItem>
                </DescriptionContainer>
            </Content>
        </Container>
    );
}

