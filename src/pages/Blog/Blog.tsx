import {
  Border,
  Description,
  DescriptionContainer,
  PostsContainer,
  SubTitle,
} from './style';

import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading/Loading';
import PostItem from '../../components/PostItem/PostItem';
import useFetch from '../../hooks/useFetch';
import { IPostItem } from '../../interfaces/postItem';
import Layout from '../../layout/Layout';

function Blog() {
  const { t } = useTranslation();
  const { data: post, isLoading } = useFetch<IPostItem[]>(`posts`);

  return (
    <Layout>
      <section>
        <SubTitle>{t('Blog.Title.TopNewsTheDay')}</SubTitle>

        <DescriptionContainer>
          <Description>{t('Blog.Description.ReadNews')}</Description>
          <Border></Border>
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
