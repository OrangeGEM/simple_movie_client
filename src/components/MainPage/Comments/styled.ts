import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100vmin;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 90%;
`;

export const TextContainer = styled.div`
    width: 100%;
    background-color: #A5A5A5;
    border-radius: 10px;

    height: auto;
    box-sizing: border-box;
    padding: 10px 30px;

    font-weight: bold;

    margin-top: 20px;
`;

export const InputContainer = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;
    
`;

export const InputItem = styled.form`
    position: fixed;
    width: 100%;
    height: 5rem;
    background-color: #A5A5A5;

    display: flex;
    flex-direction: row;
    align-items: center;

    box-sizing: border-box;
    padding: 0 2rem;
`;

export const SubmitButton = styled.input`
    background-color: black;
    color: white;
    outline: none;
    border: 0;

    min-width: 70px;
    height: 40px;   

    border-radius: 50px;
`;

export const SubmitText = styled.input`
    outline: none;
    border: 0;
    background-color: #A5A5A5;

    width: 100%;
    height: auto;

    font-size: 26px;
`;
