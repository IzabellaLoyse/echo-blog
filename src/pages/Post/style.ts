import styled from 'styled-components';
import { TagAuthor } from '../../components/PostItem/style';

export const HeaderPost = styled.header`
  margin-bottom: 1rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PostTagAuthor = styled(TagAuthor)`
  font-size: 1.2rem;
`;
