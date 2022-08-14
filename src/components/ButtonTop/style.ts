import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 50%;
  border: none;
  bottom: 50px;
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  position: fixed;
  right: 40px;
  width: 2rem;
`;
