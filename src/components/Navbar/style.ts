import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const NavBar = styled.nav`
  margin-left: 50%;

  @media (max-width: 62.5rem) {
    margin-left: 1rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem;
`;

export const MenuItem = styled.li`
  a {
    color: ${(props) => props.theme.colors.secondaryColor};
    font-size: 1.2rem;
    font-weight: ${variablesGlobal.fontWeight.medium};
    letter-spacing: 0.021em;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
`;
