// import { Container } from './style';

import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import PostList from '../../components/PostList/PostList';
import { formatterDate } from '../../functions/formatterDate';
import { postReadTime } from '../../functions/readTime';
import useFetch from '../../hooks/useFetch';
import { IPostItem } from '../../interfaces/postItem';
import Layout from '../../layout/Layout';

function Post() {
  const { id } = useParams();

  const { data: post, isLoading } = useFetch<IPostItem>(`posts/${id}`);

  return (
    <Layout>
      {isLoading && <Loading />}
      <article>
        <h2>{post?.title}</h2>
        <p>
          <span>{formatterDate(post?.createdAt)}</span>
          {postReadTime(post?.post)}
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

        <PostList />
      </section>
    </Layout>
  );
}

export default Post;
