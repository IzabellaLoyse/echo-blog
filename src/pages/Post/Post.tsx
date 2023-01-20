import { ContentHeader, HeaderPost, PostTagAuthor } from './style';

import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { PostDate } from '../../components/PostItem/style';
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

      <>
        <article>
          <HeaderPost>
            <h2>{post?.title}</h2>

            <ContentHeader>
              <PostTagAuthor> {post?.name}</PostTagAuthor>
              <PostDate>
                <span>{formatterDate(post?.createdAt)}</span>
                {postReadTime(post?.post)}
              </PostDate>
            </ContentHeader>
          </HeaderPost>

          <div>
            <img src={post?.image} alt={post?.name} />

            <p>{post?.post}</p>
          </div>

          <div>
            <h4>Categorias</h4>
            {post?.category}
          </div>
        </article>

        <section>
          <h4>Veja também</h4>

          <PostList />
        </section>
      </>
    </Layout>
  );
}

export default Post;
