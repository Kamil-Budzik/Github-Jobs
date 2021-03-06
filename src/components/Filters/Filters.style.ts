import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-template-columns: 1/-1;
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 1/2;
    grid-row: 2/3;
  }
`;
