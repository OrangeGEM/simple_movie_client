import styled from 'styled-components';
import { size } from '../../assets/viewports/viewports';

const grey = "#BCBCBC";

export const Container = styled.div`
    min-width: 100vmin;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 350px;
    height: 350px;
    max-width: 90%;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 25px;

    font-weight: bold;
`;   

export const InputField = styled.input`
    outline: none;
    border: 0;
    border-radius: 4px;
    background: ${grey};

    height: 50px;

    font-size: 18px;

    font-weight: normal;

    box-sizing: border-box;
    padding: 0px 15px;

    margin-top: 7px;
`;

export const InputButton = styled.input`
    outline: none;
    border: 0;
    border-radius: 21px;

    width: 100%;
    height: 50px;

    background: #303030;
    color: white;

    margin-top: 15px;
`;
