import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

function AboutPage({ className }: AboutPageProps) {
  const { t } = useTranslation('about');
  return (
    <div className={classNames(cls.mainPage, {}, [className])}>
      {className}
      {t('About Page', { ns: 'about' })}
    </div>
  );
}

export default AboutPage;
