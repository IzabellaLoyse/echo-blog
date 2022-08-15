// import { Container } from './style';

import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import PostItem from '../../components/PostItem/PostItem';
import useFetch from '../../hooks/useFetch';
import { IPostItem } from '../../interfaces/postItem';
import Layout from '../../layout/Layout';

function Post() {
  const { id } = useParams();

  const { data: post, isLoading } = useFetch<IPostItem>(`posts/${id}`);
  const { data: posts } = useFetch<IPostItem[]>(`posts`);

  const formatterDate = (date: any) => {
    const dateString = new Date(date).toLocaleDateString();
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    const newDate = `${dateString} às ${hours}:${minutes}`;
    return newDate;
  };

  return (
    <Layout>
      {isLoading && <Loading />}
      <article>
        <h2>{post?.title}</h2>
        <p>
          <span>{formatterDate(post?.createdAt)}</span>
          {''} • 4 min de leitura
        </p>

        <img src={post?.image} alt="" />

        <p>Por: {post?.name}</p>

        <p>{post?.post}</p>

        <div>
          <h4>Categorias</h4>
          {post?.category}
        </div>
      </article>

      <section>
        <h4>Veja também</h4>
        {posts?.map((item) => (
          <PostItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            name={item.name}
            post={item.post}
            createdAt={item.createdAt}
          />
        ))}
      </section>
    </Layout>
  );
}

export default Post;
