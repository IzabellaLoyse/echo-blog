import { Link } from 'react-router-dom';
import { Menu, MenuItem } from './style';

function Navbar() {
  return (
    <nav>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Navbar;
