import { useContext } from 'react';
import { FaBlog, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { IHeaderProps } from '../../interfaces/headerProps';
import Navbar from '../Navbar/Navbar';
import { HeaderPage, Title } from './style';

function Header({ toggleTheme }: IHeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderPage>
      <Link to="/">
        <Title>
          <FaBlog size={30} /> Echo Blog
        </Title>
      </Link>

      <Navbar />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={true}
        uncheckedIcon={true}
        height={20}
        width={50}
        handleDiameter={25}
        onColor={colors.checkedColor}
        offColor={colors.checkedColor}
        checkedHandleIcon={<FaSun color="#F59E0B" size={21} />}
        uncheckedHandleIcon={<FaMoon color="#1a150a" size={20} />}
      />
    </HeaderPage>
  );
}

export default Header;
