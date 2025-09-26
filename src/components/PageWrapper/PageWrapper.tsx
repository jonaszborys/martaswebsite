import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const PageWrapper = ({ title, description, children }: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
      </Helmet>
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};
