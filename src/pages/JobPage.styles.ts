import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;
  grid-gap: 2em;
  margin-top: 40px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.chambray};

  .apply {
    display: block;
    color: ${({ theme }) => theme.colors.heather100};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.1em;
  }

  .email {
    color: ${({ theme }) => theme.colors.blue};
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto auto;

    .title {
      display: flex;
      align-items: center;
    }

    .container {
      justify-content: start;
      padding-right: 1em;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};
  padding: 2em 2em 2em 0;

  span {
    margin-left: 1em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const Section = styled.section`
  font-family: Roboto, Poppins, sans-serif;
`;

export const Title = styled.header`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 28px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 32px;
    margin-right: 1em;
  }
`;

export const Small = styled.small`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.heather100};
  display: flex;
  align-items: center;

  span {
    margin-left: 0.3rem;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 21px 14px;
  grid-gap: 15px 6px;
  margin: 3em 0;

  small {
    grid-column: 2/-1;
    color: ${({ theme }) => theme.colors.heather100};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const Article = styled.article`
  font-family: Roboto, Poppins, Arial, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0;

  p {
    margin: 1em 0;
  }
`; 