import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import styles from './Contact.module.scss';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <PageWrapper title={t('contact.seo.title')} description={t('contact.seo.description')}>
      <div className={styles.contact}>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.text')}</p>
      </div>
    </PageWrapper>
  );
}
