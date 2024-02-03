import { useTranslation } from "react-i18next";
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');

    return (
        <div >
            {t('Main Page', { ns: 'main' })}
        </div>
    );
};

export default MainPage;
