import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
`;

export const Button = styled.button`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.tertiaryColor};
  border: 0;
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    opacity: 0.9;
  }
`;
