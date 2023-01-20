import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const FooterPage = styled.footer`
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const Description = styled.p`
  font-weight: ${variablesGlobal.fontWeight.regular};
  letter-spacing: 0.084em;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.primaryColor};
    font-weight: ${variablesGlobal.fontWeight.bold};
  }
`;
