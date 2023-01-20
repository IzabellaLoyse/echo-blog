import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';
import { Menu, MenuItem, NavBar } from './style';

function Navbar() {
  const { t } = useTranslation();

  return (
    <NavBar>
      <Menu>
        <MenuItem>
          <Link to="/">{t('Menu.Item.Home')}</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog">{t('Menu.Item.Blog')}</Link>
        </MenuItem>
        <MenuItem>
          <SwitchLanguage />
        </MenuItem>
      </Menu>
    </NavBar>
  );
}

export default Navbar;
