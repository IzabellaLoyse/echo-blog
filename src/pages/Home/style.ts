import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

export const TitleMain = styled.h2`
  font-size: 1.6rem;
`;

export const WrapperDescription = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  margin-bottom: 5rem;
  margin-top: 3rem;

  img {
    width: 55%;
    height: auto;
  }
`;

export const Subtitle = styled.h3`
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: ${variablesGlobal.fontWeight.medium};
  max-width: 45rem;
`;

export const Description = styled.p`
  font-weight: ${variablesGlobal.fontWeight.regular};
  max-width: 50rem;
  font-weight: 1.1rem;
`;
