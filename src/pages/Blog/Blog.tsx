import {
  Border,
  Description,
  DescriptionContainer,
  PostsContainer,
  SubTitle,
} from './style';

import Loading from '../../components/Loading/Loading';
import PostItem from '../../components/PostItem/PostItem';
import useFetch from '../../hooks/useFetch';
import { IPostItem } from '../../interfaces/postItem';
import Layout from '../../layout/Layout';

function Blog() {
  const { data: post, isLoading } = useFetch<IPostItem[]>(`posts`);

  return (
    <Layout>
      <section>
        <SubTitle>As principais notícias do dia </SubTitle>

        <DescriptionContainer>
          <Description>
            Leia no momento em que está acontecendo a notícia. As principais
            notícias que estão rodando o mundo você encontra por aqui.
            <Border></Border>
          </Description>
        </DescriptionContainer>

        <PostsContainer>
          {isLoading && <Loading />}

          {post?.map((item) => (
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
        </PostsContainer>
      </section>
    </Layout>
  );
}

export default Blog;
