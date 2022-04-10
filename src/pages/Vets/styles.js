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

export const VetList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`;


export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--orange);
  color: var(--orange);

  &:hover {
    color: #fff;
  }
`;