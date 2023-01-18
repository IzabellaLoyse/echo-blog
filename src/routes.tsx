import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
