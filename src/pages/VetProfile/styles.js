import styled from 'styled-components'


export const Background = styled.div`
  backgrund: #FFF0ED;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1000px;
  margin: auto;
  padding: 0 16px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 60px 16px;
  }
`;

export const ProfileHeader = styled.div`
  
`;