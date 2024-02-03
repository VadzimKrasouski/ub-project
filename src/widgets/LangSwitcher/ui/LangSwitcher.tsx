import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({className}: LangSwitcherProps) {
    const {t, i18n} = useTranslation('sidebar');

    const switchLang = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={switchLang}
            className={classNames('', {}, [className])}
        >
            {t('lang', {ns: 'sidebar'})}
        </Button>
    );
}
