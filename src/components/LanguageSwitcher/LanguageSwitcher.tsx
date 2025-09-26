import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';
import { GBIcon } from './Icons/gb';
import { PLIcon } from './Icons/pl';
import { Dropdown } from '../Dropdown/Dropdown';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  const getClassName = (lang: string) =>
    `${styles.switcherLabel} ${currentLang === lang ? styles.active : ''}`;

  if (isMobile) {
    return (
      <div className={styles.switcher}>
        <button onClick={() => changeLang('pl')} className={getClassName('pl')}>
          <PLIcon />
          <span>PL</span>
        </button>
        <button onClick={() => changeLang('en')} className={getClassName('en')}>
          <GBIcon />
          <span>EN</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.switcher}>
      <Dropdown
        onChange={changeLang}
        value={currentLang}
        options={[
          {
            label: (
              <div className={styles.switcherLabel}>
                <PLIcon />
                <span>PL</span>
              </div>
            ),
            value: 'pl',
          },
          {
            label: (
              <div className={styles.switcherLabel}>
                <GBIcon />
                <span>EN</span>
              </div>
            ),
            value: 'en',
          },
        ]}
      />
    </div>
  );
}
