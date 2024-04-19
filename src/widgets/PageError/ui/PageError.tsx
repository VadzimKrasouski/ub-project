import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('pageError');

    const reloadPage = () => {
        window.location.reload()
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h1>{t('Something went wrong', { ns: 'pageError' })}</h1>
            <button onClick={reloadPage}>
                {t('Reload page', { ns: 'pageError' })}
            </button>
        </div>
    );
};
