import { PostsContainer, SubTitle } from './style';

import PostItem from '../../components/PostItem/PostItem';
import Layout from '../../layout/Layout';

function Blog() {
  return (
    <Layout>
      <section>
        <SubTitle>As principais notícias do dia </SubTitle>

        <PostsContainer>
          <PostItem />
        </PostsContainer>
      </section>
    </Layout>
  );
}

export default Blog;
