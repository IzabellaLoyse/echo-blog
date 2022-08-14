import styled from 'styled-components';

export const HeaderPage = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.084em;
`;

export const TitleColor = styled.span`
  color: ${(props) => props.theme.colors.tertiaryColor};
`;
