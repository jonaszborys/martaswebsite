import { Link } from 'react-router-dom';
import styles from './ContactButton.module.scss';
import { useTranslation } from 'react-i18next';

export default function ContactButton() {
  const { t } = useTranslation();

  return (
    <Link to='/contact' className={styles.contactButton}>
      {t('contact.button')}
    </Link>
  );
}
