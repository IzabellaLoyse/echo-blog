import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const HeaderPage = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: ${variablesGlobal.fontWeight.bold};
  letter-spacing: 0.084em;
`;

export const TitleColor = styled.span`
  color: ${(props) => props.theme.colors.tertiaryColor};
`;
