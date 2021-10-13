import styled from 'styled-components'

export const Background = styled.div`
  background: linear-gradient(180deg, #FFF3F1 0%, rgba(255, 255, 255, 0) 100%);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  margin: auto;
  padding: 80px 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    position: relative;
    right: -40px;

    @media (max-width: 768px) {
      position: absolute;
      right: -100px;
      width: 330px;
      opacity: .4;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: var(--z1);

  h1 {
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 8px;

    strong {
      color: var(--orange);
    }
  }

  h2 {
    font-size: 16px;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 6px;
    border: 1px solid #E1E1E1;
    border-radius: 8px;
    height: 58px;
    background: white;
  }

  input {
    width: 100%;
    border: unset;
    padding: 0 16px;

    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  button {
    background: var(--orange);
    margin-left: 8px;
    border: unset;
    width: 120px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background: #ec4527;
    }
  }
`;
