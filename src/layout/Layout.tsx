import { DefaultTheme, ThemeProvider } from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import usePersistedState from '../hooks/usePersistedState';
import { ILayoutProps } from '../interfaces/layoutProps';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { Container } from './style';

function Layout({ children }: ILayoutProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Container>
        <Header toggleTheme={handleToggleTheme} />

        <main>{children}</main>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
