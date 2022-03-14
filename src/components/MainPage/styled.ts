import styled from 'styled-components'
import { size } from '../../assets/viewports/viewports';


export const Container = styled.div`
    min-width: 100vmin;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    min-width: 85%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        min-width: 95%;
    }
`;