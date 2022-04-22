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