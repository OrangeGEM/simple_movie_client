import React, { useContext, useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MovieInterface } from '../../../assets/interfaces/movie.interface';
import { CastDescription, Container, Content, DescriptionContainer, DescriptionItem, DescriptionText, InputButton, MovieContainer, CastContainer, TitleText, Column } from './styled';
import ReactPlayer from 'react-player'

export default function Movie() {
    const location = useLocation();
    const navigate = useNavigate();

    //@ts-ignore
    const movie = location.state as MovieInterface;
    console.log(movie);

    function handleClick(id: number) {
        navigate('/comments', { state: id })
    }

    return (
        <Container>
            <Content>


                <DescriptionContainer>
                    <img src={movie.posterUrl} />
                    <Column style={{display:"flex", height: "100%", justifyContent: "space-evenly"}}>
                        <DescriptionItem>
                            <TitleText> Title </TitleText>
                            <DescriptionText> {movie.title} </DescriptionText>
                        </DescriptionItem>

                        <DescriptionItem>
                            <TitleText> Year </TitleText>
                            <DescriptionText> {movie.year} </DescriptionText>
                        </DescriptionItem>

                        <DescriptionItem>
                            <TitleText> Duration </TitleText>
                            <DescriptionText> {movie.duration} </DescriptionText>
                        </DescriptionItem>

                        <DescriptionItem>
                            <TitleText> Rating </TitleText>
                            <DescriptionText> {movie.rating} </DescriptionText>
                        </DescriptionItem>
                    </Column>
                </DescriptionContainer>
            </Content>

            <CastDescription>
                <span> Cast: </span>
                <CastContainer>
                    {
                        movie.cast.map((item) => {
                            return (<div> {item}, &nbsp;</div>)
                        })
                    }
                </CastContainer>
                
                <br />

                <MovieContainer>
                    {
                        movie.urls.map(item => {
                            return (<ReactPlayer url={item} />)
                        })
                    }
                </MovieContainer>

                <InputButton type="button" value="Show comment" onClick={() => handleClick(movie.id)} />
            </CastDescription>
        </Container>
    );
}



