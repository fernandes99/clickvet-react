import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: auto;
  padding: 80px 20px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 8px;

      strong {
        color: var(--orange);
      }
    }

    h2 {
      font-size: 16px;
      margin-bottom: 16px;
    }
`;