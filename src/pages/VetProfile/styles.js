import styled from 'styled-components'


export const Background = styled.div`
  position: relative;
  background: #fafafa;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 20px 0;

  &.profile-container {
    padding: 0;
  }

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

    &.profile-container {
      padding: 40px 0 0 0;
    }
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 2px 6px rgb(63 15 0 / 5%);
  overflow: hidden;

  &.profile-box:before {
    content: "";
    background: linear-gradient(90deg, var(--orange), #69147c00), url(https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg);
    background-blend-mode: normal;
    background-position: center;
    width: 100%;
    height: 120px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  @media (min-width: 1000px) {
    border-radius: 8px;
    padding: 32px;
  }
`;

export const ProfileContent = styled.div`
  img {
    border: 2px solid #fff;
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

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        display: flex;
        flex-direction: column;

        span:last-child {
          color: var(--orange);
          font-size: 1.5em;
        }
      }

      button {
        display: flex;
        align-items: center;
        padding: 14px 16px;
      }
    }

    &-title {
      font-size: 20px;
    }
  }
`;

export const ListContent = styled.div`
  .list-title {
    font-size: 20px;
  }

  ul {
    margin-top: 24px;
  }
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