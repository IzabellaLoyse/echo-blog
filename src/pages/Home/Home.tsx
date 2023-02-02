import {
  Description,
  Subtitle,
  TitleMain,
  WrapperDescription,
  WrapperTitle,
} from './style';

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

      <WrapperDescription>
        <Subtitle>{t('Home.Subtitle.FollowMainNews')}</Subtitle>
        <img
          src="/blogging.svg"
          alt={t('Home.Alt.PeopleLookingWorking') as any}
        />

        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          rem excepturi consequatur hic. Iste totam consectetur dolore, fugit
          consequuntur minus eligendi tenetur, pariatur omnis ad corrupti,
          reprehenderit voluptatem tempora ab.
        </Description>
      </WrapperDescription>

      <WrapperDescription>
        <Subtitle>{t('Home.Subtitle.OurPublicationsCreatedByTeam')}</Subtitle>
        <img
          src="/creator.svg"
          alt={t('Home.Alt.WomanLookingScreens') as any}
        />

        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          rem excepturi consequatur hic. Iste totam consectetur dolore, fugit
          consequuntur minus eligendi tenetur, pariatur omnis ad corrupti,
          reprehenderit voluptatem tempora ab.
        </Description>
      </WrapperDescription>
    </Layout>
  );
}

export default Home;
