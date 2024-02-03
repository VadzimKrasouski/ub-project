import { useTranslation } from "react-i18next";
import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About Page', { ns: 'about' })}
        </div>
    );
};

export default AboutPage;
