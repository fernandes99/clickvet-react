import styled from 'styled-components'

export const Item = styled.div`
  display: flex;

  @media (max-width: 1000px) {
  }
`;

export const Card = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  width: 100%;
  gap: 12px;
  padding: 16px;
  box-shadow: 0px 6px 20px rgba(63, 15, 0, 0.15);
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s;

  img {
    border-radius: 50%;
  }

  i, p {
    color: var(--orange);
    transition: all .3s;
  }

  &:hover {
    box-shadow: 0px 12px 30px rgba(63, 15, 0, 0.15);
    i {
      transform: translateX(5px);
    }
  }

  @media (max-width: 1000px) {
  }
`;