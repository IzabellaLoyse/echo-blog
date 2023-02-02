import { Button, Wrapper } from './style';

import { useTranslation } from 'react-i18next';
import { FaFlag } from 'react-icons/fa';
import { languageOptions } from '../../functions/languageOptions';

function SwitchLanguage() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {languageOptions.map((language) => (
        <Wrapper>
          <Button
            type="button"
            key={language.name}
            onClick={() => {
              i18n.changeLanguage(language.value);
            }}
          >
            <FaFlag size={20} />
            {t(`Menu.Language.${language.name}`)}
          </Button>
        </Wrapper>
      ))}
    </>
  );
}

export default SwitchLanguage;
