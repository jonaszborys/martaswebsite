import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import styles from './About.module.scss';
import signature from '../../assets/images/about/signature.png';
import support from '../../assets/images/home/support.png';

export default function About() {
  const { t } = useTranslation();

  return (
    <PageWrapper title={t('about.seo.title')} description={t('about.seo.description')}>
      <div className={styles.about}>
        <img src={signature} alt='Signature' />
        <div className={styles.aboutContent}>
          <article className={styles.halfWidth}>
            <p>{t('about.article.line1')}</p>
            <p>{t('about.article.line2')}</p>
          </article>
          <img src={support} alt='TODO' className={styles.halfWidth} />
        </div>
      </div>
    </PageWrapper>
  );
}
