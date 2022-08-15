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
import { IPostItem } from '../../interfaces/postItem';

function PostItem({ id, name, image, createdAt, post, title }: IPostItem) {
  const formatterDate = (date: any) => {
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString('pt-BR', { month: 'long' });
    const hours = new Date(date).getHours();

    const monthUpperCase = month.charAt(0).toUpperCase() + month.slice(1);

    const newDate = `${monthUpperCase} ${day}, ${year} •  há ${hours} horas`;
    return newDate;
  };

  return (
    <Container>
      <PostImage>
        <img src={image} alt="Imagem da notícia" />
      </PostImage>

      <PostContent>
        <PostData>
          <PostDate>
            <>{formatterDate(createdAt)} </>
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
