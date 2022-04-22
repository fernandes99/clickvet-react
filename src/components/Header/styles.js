import styled from 'styled-components'

export const Fixed = styled.div `
    /* position: fixed; */
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: var(--z1);
    font-size: 14px;
    border-bottom: 1px solid var(--gray-lighter);
`;

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
    padding: 8px 0;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 8px 16px;
    }
`;

export const Navigation = styled.nav `
    ul {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    a {
        font-size: 14px;
        padding: 6px 10px;
        border-radius: 6px;
    }

    a:hover {
        background: #00000008;
    }

    button {
        font-size: 1em;
    }

    @media (max-width: 1000px) {
        li:not(:last-child) {
            display: none;
        }
    }
`;