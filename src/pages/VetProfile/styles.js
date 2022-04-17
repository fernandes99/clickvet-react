import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1000px;
  margin: auto;
  padding: 80px 16px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 60px 16px;
  }
`;