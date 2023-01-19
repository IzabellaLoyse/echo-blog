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

        <a href={`/post/${id}`}>Leia Mais</a>
      </PostContent>
    </Container>
  );
}

export default PostItem;
