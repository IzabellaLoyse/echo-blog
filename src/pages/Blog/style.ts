import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
