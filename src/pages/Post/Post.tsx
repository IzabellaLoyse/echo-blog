import {
  ContentHeader,
  HeaderPost,
  PostDescription,
  PostHeaderTitle,
  PostTagAuthor,
  TitleCategories,
  TitleSeeToo,
  Wrapper,
  WrapperCategories,
  WrapperSeeToo,
} from './style';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { PostDate } from '../../components/PostItem/style';
import PostList from '../../components/PostList/PostList';
import { formatterDateWithHours } from '../../functions/formatterDate';
import { postReadTime } from '../../functions/readTime';
import useFetch from '../../hooks/useFetch';
import { IPostItem } from '../../interfaces/postItem';
import Layout from '../../layout/Layout';
import { Border } from '../Blog/style';

function Post() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data: post, isLoading } = useFetch<IPostItem>(`posts/${id}`);

  return (
    <Layout>
      {isLoading && <Loading />}

      {post && (
        <>
          <article>
            <HeaderPost>
              <PostHeaderTitle>{post?.title}</PostHeaderTitle>

              <ContentHeader>
                <PostTagAuthor> {post?.name}</PostTagAuthor>
                <PostDate>
                  <span>{formatterDateWithHours(post?.createdAt, true)}</span>
                  {postReadTime(post?.post)}
                </PostDate>
              </ContentHeader>
            </HeaderPost>

            <Wrapper>
              <img src={post?.image} alt={post?.name} />
              <PostDescription>{post?.post}</PostDescription>
            </Wrapper>

            <WrapperCategories>
              <TitleCategories> {t('Post.Item.Categories')}</TitleCategories>
              <p> {post?.category}</p>
            </WrapperCategories>
          </article>

          <section>
            <WrapperSeeToo>
              <TitleSeeToo> {t('Post.Item.SeeToo')}</TitleSeeToo>
              <Border></Border>
            </WrapperSeeToo>

            <PostList />
          </section>
        </>
      )}
    </Layout>
  );
}

export default Post;
