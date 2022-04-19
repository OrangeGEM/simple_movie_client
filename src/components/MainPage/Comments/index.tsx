import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CommentsInterface } from '../../../assets/interfaces/comments.interface';
import { useHttp } from '../../../hooks/http.hook';
import { Container, Content, InputContainer, InputItem, SubmitButton, SubmitText, TextContainer } from './styled';

export default function Comments() {
    const location = useLocation();
    const movieId = location.state;
    console.log(movieId);
    const { request } = useHttp();

    const [comments, setComments] = useState<Array<CommentsInterface>>([]);

    useEffect(() => {
        (async () => {
            const req = await request(`${process.env.REACT_APP_COMMENTS_URL}/${movieId}`, "GET")
                .then((response) => {
                    return response;
                })
            console.log('Requests comments: ', req);
            setComments(req);
        })();
    }, [])

    async function handleSendComment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const target = event.currentTarget;

        try {
            const data = {
                movie_id: movieId,
                message: target.message.value
            }
            if(data.message.trim() == '') {
                throw new Error("Message is empty");
            }

            const req = await request(process.env.REACT_APP_COMMENTS_URL, "POST", data)
                .then((response) => {
                    return response;
                })
            comments.push(req);
            setComments([...comments]);
        } catch(e) {
            throw e;
        }
        target.message.value = "";
    }

    return (
        <Container>
            <Content>
                {
                    comments ? comments.map((item, id) => {
                        return (
                            <TextContainer>
                                {item.message}
                            </TextContainer>
                        )
                    }) : <></>
                }
            </Content>

            <InputContainer>
                <InputItem onSubmit={event => handleSendComment(event)}>
                    <SubmitText type="text" name="message" placeholder="Type a message" size={10} />
                    <SubmitButton type="submit" value="Send" />
                </InputItem>
            </InputContainer>
        </Container>
    );
}

