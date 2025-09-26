import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import { useParallax } from '../../hooks/useParallax';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import styles from './Home.module.scss';

import building from '../../assets/images/home/building.png';
import frameworks from '../../assets/images/home/frameworks.png';
import management from '../../assets/images/home/management.png';
import partnering from '../../assets/images/home/partnering.png';
import processes from '../../assets/images/home/processes.png';
import support from '../../assets/images/home/support.png';
import business from '../../assets/images/home/business.png';
import heroBg from '../../assets/images/home/hero.jpeg';

export default function Home() {
  const { t } = useTranslation();
  const imageRef = useRef<HTMLElement>(null);
  const parallax = useParallax(imageRef);
  useFadeInOnScroll(styles.fadeUp, styles.visible);

  const offerings = [
    {
      img: support,
      alt: 'Business offering support',
      title: t('home.offering.1.title'),
      desc: t('home.offering.1.description'),
    },
    {
      img: building,
      alt: 'Business offering building HR Departments in Poland',
      title: t('home.offering.2.title'),
      desc: t('home.offering.2.description'),
    },
    {
      img: partnering,
      alt: 'Business offering HR Business Partnering',
      title: t('home.offering.3.title'),
      desc: t('home.offering.3.description'),
    },
    {
      img: processes,
      alt: 'Business offering expert evaluation of HR Systems & Processes',
      title: t('home.offering.4.title'),
      desc: t('home.offering.4.description'),
    },
    {
      img: frameworks,
      alt: 'Business offering competency Matrices & Development Frameworks',
      title: t('home.offering.5.title'),
      desc: t('home.offering.5.description'),
    },
    {
      img: management,
      alt: 'Business offering temporary HR Support & Project Management',
      title: t('home.offering.6.title'),
      desc: t('home.offering.6.description'),
    },
  ];

  return (
    <PageWrapper title={t('home.seo.title')} description={t('home.seo.description')}>
      <section className={`${styles.hero} ${styles.fadeUp}`}>
        <div className={styles.heroContent} style={{ backgroundImage: `url(${heroBg})` }}>
          <div className={styles.contentCard}>
            <h2 className={styles.title}>
              {t('home.hero.title')}
              <span className={styles.line}></span>
            </h2>
            <p className={styles.description}>{t('home.hero.text')}</p>
          </div>
        </div>
      </section>

      <section className={styles.businessImageSection} ref={imageRef}>
        <img
          src={business}
          alt='Business Image'
          style={{
            transform: `translateY(${parallax.y}%) scale(${parallax.scale})`,
          }}
        />
      </section>

      <section className={`${styles.offeringTitleSection} ${styles.fadeUp}`}>
        <p>{t('home.offering.title')}</p>
        <h2>{t('home.offering.subtitle')}</h2>
      </section>

      <section className={styles.offeringSection}>
        <div className={styles.offering}>
          {offerings.map(({ img, alt, title, desc }) => (
            <div key={title} className={styles.fadeUp}>
              <img src={img} alt={alt} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.referenceSection}`}>
        <h2 className={styles.fadeUp}>{t('home.reference.text.line1')}</h2>
        <h2 className={styles.fadeUp}>{t('home.reference.text.line2')}</h2>
        <p className={styles.fadeUp}>{t('home.reference.name.line1')}</p>
        <p className={styles.fadeUp}>{t('home.reference.name.line2')}</p>
      </section>
    </PageWrapper>
  );
}
