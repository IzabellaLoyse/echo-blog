import { TitleMain, WrapperTitle } from './style';

import Layout from '../../layout/Layout';
import { Border } from '../Blog/style';

import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <WrapperTitle>
        <TitleMain>{t('Home.Title.EchoBlogNews')}</TitleMain>
        <Border></Border>
      </WrapperTitle>

      <div>
        <p>
          Acompanhe as principais noticias que estão acontecendo no mundo em um
          so lugar
        </p>
      </div>
    </Layout>
  );
}

export default Home;
