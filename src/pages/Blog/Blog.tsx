// import { Container } from './style';

import PostItem from '../../components/PostItem/PostItem';
import Layout from '../../layout/Layout';

function Blog() {
  return (
    <Layout>
      <section>
        <h2>As principais noticias </h2>

        <div>
          <PostItem />
        </div>
      </section>
    </Layout>
  );
}

export default Blog;
