import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  height: 26rem;
  width: 20rem;
`;

export const PostImage = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex: 5;
  justify-content: center;
  overflow: hidden;

  img {
    max-height: 100%;
    width: 18rem;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  padding: 1rem;
`;

export const PostData = styled.div`
  margin-bottom: 1rem;
`;

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: ${variablesGlobal.fontWeight.bold};
`;

export const TagAuthor = styled.span`
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const PostTitle = styled.h3`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  text-transform: capitalize;
`;

export const PostDescription = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  font-weight: ${variablesGlobal.fontWeight.regular};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonReadMore = styled.a`
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.colorLink};
  font-size: 1rem;
  font-weight: ${variablesGlobal.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
