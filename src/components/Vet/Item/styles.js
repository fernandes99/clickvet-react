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
  grid-template-columns: 80px 1fr auto;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(63, 15, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s;

  img {
    border-radius: 50%;
    height: auto;
  }

  .icon, p {
    color: var(--orange);
    stroke: var(--orange);
    transition: all .3s;
  }

  &:hover {
    box-shadow: 0px 8px 16px rgba(63, 15, 0, 0.15);

    .icon {
      transform: translateX(5px);
    }
  }

  @media (max-width: 1000px) {

  }
`;