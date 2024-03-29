// import { Container } from './style';

import useFetch from '../../hooks/useFetch';
import { IPostItem } from '../../interfaces/postItem';
import { PostsContainer } from '../../pages/Blog/style';
import PostItem from '../PostItem/PostItem';

function PostList() {
  const { data: posts } = useFetch<IPostItem[]>(`posts?page=1&limit=3`);

  return (
    <PostsContainer>
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
    </PostsContainer>
  );
}

export default PostList;
