import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

function MainPage({ className }: MainPageProps) {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.mainPage, {}, [className])}>
            {t('Main Page', { ns: 'main' })}
            <BugButton />
        </div>
    );
}

export default MainPage;
