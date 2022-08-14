// import { Container } from './style';

import { Link } from 'react-router-dom';
import { IPostItem } from '../../interfaces/postItem';

function PostItem({ id, name, image, createdAt, post, title }: IPostItem) {
  const conversorDate = (date: any) => {
    const newDate = new Date(date).toDateString();

    return newDate;
  };

  return (
    <article>
      <div>
        <img src={image} alt="Imagem da notícia" />
      </div>

      <div>
        <div>
          <p>
            <>
              {conversorDate(createdAt)} | <span>{name}</span>
            </>
          </p>
        </div>
        <h3>{title}</h3>
        <p>{post}</p>
        <Link to={`/post/${id}`}>Leia Mais</Link>
      </div>
    </article>
  );
}

export default PostItem;
