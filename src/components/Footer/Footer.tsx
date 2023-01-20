import { useTranslation } from 'react-i18next';
import { Description, FooterPage } from './style';

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterPage>
      <Description>
        Echo Blog &copy; 2022 - 2023 |{' '}
        <span>
          {t('Footer.Description.DevelopedBy')}{' '}
          <a href="https://github.com/IzabellaLoyse">Izabella Loyse</a>
        </span>
      </Description>
    </FooterPage>
  );
}

export default Footer;
