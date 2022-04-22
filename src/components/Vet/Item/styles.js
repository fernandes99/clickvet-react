import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 1000px) {
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(63, 15, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 8px 16px rgba(63, 15, 0, 0.15);

    .icon {
      transform: translateX(5px);
    }
  }

  @media (max-width: 1000px) {

  }
`;

export const CardContent = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 80px 1fr auto;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
  padding: 16px;

  cursor: pointer;
  transition: all .3s;

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    div {
      position: relative;
      max-height: 100px;
      width: 110%;

      span {
        color: var(--gray);
        font-size: 14px;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:before {
        content: "";
        background: linear-gradient(-90deg, #ffffff 0%, #ffffff00 20%);
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }

  .icon, p {
    color: var(--orange);
    stroke: var(--orange);
    transition: all .3s;
  }
`;