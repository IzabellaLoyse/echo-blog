import {
  ButtonReadMore,
  Container,
  PostContent,
  PostData,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  TagAuthor,
} from './style';

import { useTranslation } from 'react-i18next';
import { formatterDateWithHours } from '../../functions/formatterDate';
import { IPostItem } from '../../interfaces/postItem';

function PostItem({ id, name, image, createdAt, post, title }: IPostItem) {
  const { t } = useTranslation();

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

        <ButtonReadMore href={`/post/${id}`}>
          {t('Post.Item.ReadMore')}
        </ButtonReadMore>
      </PostContent>
    </Container>
  );
}

export default PostItem;
