import styled from 'styled-components'

export const Loading = styled.div `
    position: absolute;
    background: #000;
    width: 100vw;
    height: 100vh;

    @media (max-width: 600px) {
        span {
            font-size: 12px;
        }
    }
`;