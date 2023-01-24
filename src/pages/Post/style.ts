import styled from 'styled-components';
import { PostTitle, TagAuthor } from '../../components/PostItem/style';
import { variablesGlobal } from '../../styles/variables';

export const HeaderPost = styled.header`
  margin-bottom: 1rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PostHeaderTitle = styled(PostTitle)`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const PostTagAuthor = styled(TagAuthor)`
  font-size: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  img {
    width: 50%;
    height: auto;
  }
`;

export const PostDescription = styled.p`
  font-weight: ${variablesGlobal.fontWeight.medium};
  font-size: 1.1rem;
`;

export const WrapperCategories = styled.div`
  padding-bottom: 1rem;
`;

export const TitleCategories = styled.h4`
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: ${variablesGlobal.fontWeight.bold};
  font-size: 1.1rem;
`;

export const WrapperSeeToo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleSeeToo = styled.h4`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
`;
