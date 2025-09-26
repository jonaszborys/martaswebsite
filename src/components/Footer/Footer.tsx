import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-gold.png';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link className={styles.logo} to='/'>
          <img src={logo} alt='Logo' className={styles.logoImg} />
        </Link>

        <nav className={`${styles.nav} ${styles.column}`}>
          <Link to='/'>{t('nav.home')}</Link>
          <Link to='/about'>{t('nav.about')}</Link>
          <Link to='/contact'>{t('nav.contact')}</Link>
        </nav>

        <div className={`${styles.socials} ${styles.column}`}>
          <a
            href='https://www.linkedin.com/in/marta-borkowska-256430b2/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className={`${styles.contact} ${styles.column}`}>
          <p>Silesia, Poland</p>
        </div>
      </div>
    </footer>
  );
}
