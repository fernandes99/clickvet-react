import styled from 'styled-components'


export const Background = styled.div`
  position: relative;
  background: #fafafa;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 200px;
    background: var(--orange);
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 0 16px 20px;

  .breadcrumb {
    margin: 24px 0;

    li {
      color: #000;
      opacity: .5;
    }

    svg {
      fill: #000;
      opacity: .3;
    }
  }

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 6px rgb(63 15 0 / 5%);

  @media (min-width: 1000px) {
    padding: 32px;
  }
`;

export const ProfileContent = styled.div`
  img {
    border: 1.5px solid var(--orange);
    border-radius: 50%;
  }

  .info {
    margin-top: 8px;
    display: grid;
    gap: 14px;

    h3 {
      font-size: 28px;
      font-weight: bold;
      line-height: 100%;
      margin: 8px 0 -4px;
    }

    .about {
      span {
        color: var(--gray);
      }
    }

    .price {
      display: flex;
      flex-direction: column;

      span:last-child {
        color: var(--orange);
        font-size: 1.5em;
      }
    }

    &-title {
      font-size: 20px;
    }
  }
`;

export const ListContent = styled.div`
  
`;

export const Rating = styled.div`
  font-size: 17px;
  display: flex;
  gap: 4px;

  svg.star {
    fill: var(--yellow);
  }
  .rate {
    color: var(--yellow);
  }

  .votes {
    margin-right: 5px;
    color: var(--gray);
  }

  .action {
    display: flex;
    align-items: center;
    color: var(--orange);
    font-weight: bold;
    cursor: pointer;

    svg.chrevron {
      fill: var(--orange);
      width: 24px;
      height: 24px;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;

  span {
    display: flex;
    align-items: center;
    color: var(--orange);
    border: 1px solid var(--orange);
    border-radius: 6px;
    padding: 4px 8px;
  }
`;