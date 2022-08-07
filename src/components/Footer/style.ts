import styled from 'styled-components';

export const FooterPage = styled.footer`
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const Description = styled.p`
  font-weight: 400;
  letter-spacing: 0.084em;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.primaryColor};
    font-weight: 700;
  }
`;
