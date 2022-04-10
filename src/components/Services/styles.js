import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    font-size: 14px;

    .content {
        border-radius: 16px;
        box-shadow: 0px 4px 12px rgb(63 15 0 / 10%);
        padding: 16px 24px 24px;
    }

    i {
        font-size: 2em;
    }

    h3 {
        font-weight: bold;
        font-size: 1.6em;
        margin: 4px 0;
    }

    p {
        color: var(--gray);
    }

    @media (max-width: 800px) {
        font-size: 12px;
        gap: 32px;

        i {
            font-size: 1.6em;
        }

        h3 {
            font-weight: bold;
            font-size: 1.2em;
            margin: 4px 0;
        }
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;

        /* i {
            font-size: 1.em;
        }

        h3 {
            font-weight: bold;
            font-size: 1em;
            margin: 4px 0;
        } */
    }
`;