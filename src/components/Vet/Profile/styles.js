import styled from 'styled-components'

export const Item = styled.li`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content;
  gap: 8px;

  .icon {
    padding-top: 3px;

    svg {
      fill: var(--gray) !important;
    }
  }

  .subtitle {
    display: block;
    color: var(--gray);
  }

  @media (min-width: 1000px) {
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: var(--grayLight);
`;