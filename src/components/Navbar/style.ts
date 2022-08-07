import styled from 'styled-components';

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  margin-left: 70rem;
`;

export const MenuItem = styled.li`
  a {
    color: ${(props) => props.theme.colors.secondaryColor};
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.021em;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
`;
