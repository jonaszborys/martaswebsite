import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logoDesktop from '../../assets/logo-black.png';
import logoMobile from '../../assets/logo-gold.png';
import ContactButton from '../ContactButton/ContactButton';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ROUTES } from '../../main';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const HeaderLink = ({
  path,
  onClick,
  children,
}: {
  path: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <NavLink
    to={path}
    className={({ isActive }) => (isActive ? styles.active : undefined)}
    onClick={() => onClick && onClick()}
  >
    {children}
  </NavLink>
);

export default function Header() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  if (isMobile) {
    return (
      <header className={styles.headerMobile}>
        <div className={styles.mobileTop}>
          <Link to={ROUTES.HOME} className={styles.logo} onClick={closeMenu}>
            <img src={logoMobile} alt='Logo mobile' />
          </Link>
          <button
            className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className={`${styles.navMobile} ${menuOpen ? styles.open : ''}`}>
          <LanguageSwitcher />

          <HeaderLink path={ROUTES.HOME} onClick={closeMenu}>
            {t('nav.home')}
          </HeaderLink>
          <HeaderLink path={ROUTES.ABOUT} onClick={closeMenu}>
            {t('nav.about')}
          </HeaderLink>
          <HeaderLink path={ROUTES.CONTACT} onClick={closeMenu}>
            {t('nav.contact')}
          </HeaderLink>
        </nav>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <nav className={styles.nav}>
          <HeaderLink path={ROUTES.HOME}>{t('nav.home')}</HeaderLink>
          <HeaderLink path={ROUTES.ABOUT}>{t('nav.about')}</HeaderLink>
          <HeaderLink path={ROUTES.CONTACT}>{t('nav.contact')}</HeaderLink>
        </nav>
      </div>

      <Link to={ROUTES.HOME} className={styles.logo}>
        <img src={logoDesktop} alt='Logo desktop' />
      </Link>

      <div className={styles.right}>
        <ContactButton />
      </div>

      <LanguageSwitcher />
    </header>
  );
}
