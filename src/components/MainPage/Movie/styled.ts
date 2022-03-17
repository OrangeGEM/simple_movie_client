import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;

    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`;

export const DescriptionContainer = styled.div`
    font-weight: bold;
    font-size: 22px;
    width:100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: none;
`;

export const DescriptionItem = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
`;

export const TitleText = styled.div`
    width: 8rem;
`;

export const DescriptionText = styled.div`
    max-width: auto;
`;

export const CastDescription = styled(Content)`
    flex-direction: column;
    font-weight: bold;
`;

export const CastContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputButton = styled.input`
    outline: none;
    border: 0;
    border-radius: 21px;

    align-self: center;

    min-width: 200px;
    height: 50px;

    background: #303030;
    color: white;

    margin-top: 15px;

    cursor: pointer;
`;

export const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;


//reuse

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;