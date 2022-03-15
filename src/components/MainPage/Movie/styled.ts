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
    padding-left: 50px;

    width:100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

export const CastDescription = styled(Content)`
    flex-direction: column;
    font-weight: bold;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
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

    cursor: pointer;
`;