import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
