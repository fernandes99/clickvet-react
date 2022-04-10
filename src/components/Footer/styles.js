import styled from 'styled-components'

export const Container = styled.div `
    padding: 80px 20px;
    background: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        text-align: center;
        color: #fff;

        i {
            color: var(--orange);
        }
    }

    @media (max-width: 600px) {
        span {
            font-size: 12px;
        }
    }
`;