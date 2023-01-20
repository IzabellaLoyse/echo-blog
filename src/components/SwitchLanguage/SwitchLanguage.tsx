import { Button } from './style';

import { useTranslation } from 'react-i18next';
import { languageOptions } from '../../functions/languageOptions';

function SwitchLanguage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {languageOptions.map((language) => (
        <Button
          type="button"
          key={language.value}
          onClick={() => {
            i18n.changeLanguage(language.value);
          }}
        >
          {t(`Menu.Language.${language.name}`)}
        </Button>
      ))}
    </>
  );
}

export default SwitchLanguage;
