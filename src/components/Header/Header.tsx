// import { Container } from './style';
import Switch from 'react-switch';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IHeaderProps } from '../../interfaces/headerProps';
import Navbar from '../Navbar/Navbar';

function Header({ toggleTheme }: IHeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <header>
      <h1>Echo Blog</h1>

      <Navbar />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={25}
        onColor={colors.primaryColor}
      />
    </header>
  );
}

export default Header;
