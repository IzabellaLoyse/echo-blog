import {
  Container,
  PostContent,
  PostData,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  TagAuthor,
} from './style';

import { Link } from 'react-router-dom';
import { formatterDateWithHours } from '../../functions/formatterDate';
import { IPostItem } from '../../interfaces/postItem';

function PostItem({ id, name, image, createdAt, post, title }: IPostItem) {
  return (
    <Container>
      <PostImage>
        <img src={image} alt="Imagem da notícia" />
      </PostImage>

      <PostContent>
        <PostData>
          <PostDate>
            <>{formatterDateWithHours(createdAt)} </>
          </PostDate>
          <TagAuthor>{name}</TagAuthor>
        </PostData>

        <PostTitle>{title}</PostTitle>
        <PostDescription>{post}</PostDescription>

        <Link to={`/post/${id}`}>Leia Mais</Link>
      </PostContent>
    </Container>
  );
}

export default PostItem;
