import { Link } from 'react-router-dom';
import { Menu, MenuItem, NavBar } from './style';

function Navbar() {
  return (
    <NavBar>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">Blog</Link>
        </MenuItem>
      </Menu>
    </NavBar>
  );
}

export default Navbar;
