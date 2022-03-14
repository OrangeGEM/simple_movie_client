import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #A5A5A5;

    margin-top: 20px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 15px;

    height: 130px;
`;

export const DescriptionContainer = styled.div`
    font-weight: bold;
    font-size: 22px;
    padding-left: 50px;

    width:100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    cursor: pointer;

    outline: none;
`;

export const DescriptionItem = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TitleText = styled.div`
    width: 8rem;
`;

export const DescriptionText = styled.div`
    max-width: 80%;
`;
