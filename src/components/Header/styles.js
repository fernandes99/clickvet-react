import styled from 'styled-components'

export const Fixed = styled.div `
    /* position: fixed; */
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: var(--z1);
`;

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    height: 72px;
    margin: auto;
    padding: 8px 20px;

    @media (max-width: 1000px) {
        width: 100%;
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
        font-size: 14px;
    }
`;