import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  max-width: 600px;
`;

export const Border = styled.span`
  background-image: linear-gradient(
    90deg,
    rgba(33, 97, 195, 1) 26%,
    rgba(58, 127, 230, 1) 74%
  );

  display: inline-block;
  height: 4%;
  padding: 0.2rem;
  width: 15%;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
