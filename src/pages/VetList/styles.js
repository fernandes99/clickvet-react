import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1000px;
  margin: 0 auto;
  padding: 80px 16px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 60px 16px;
  }
`;

export const VetListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const FilterButton = styled.button`
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--orange);
  color: var(--orange);
  padding: 4px 20px 2px;

  &:hover {
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 4px 14px 2px;
  }
`;

export const Filter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 32px;
  width: 80vw;
  border-radius: 8px;
  color: var(--gray-darker);

  form {
    display: grid;
    gap: 24px;

    fieldset {
      width: 100%;
      display: grid;
      gap: 8px;

      legend {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .checkbox {
        position: relative;
        width: 100%;
        background: var(--gray-lighter);
        border-radius: 8px;
        padding: 12px 16px;
        display: flex;
        justify-content: flex-end;

        label {
          position: absolute;
          top: 0;
          left: 20px;
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
        }

        input {
          outline: 2px #DBDBDB;
          width: 24px;
          height: 24px;
          margin: 0;
          box-shadow: inset 0px 0px 0px 2px #e1e1e1;
        }
      }
    }
  }

`;