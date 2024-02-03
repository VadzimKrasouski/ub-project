import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({className}: NavbarProps) {
    const {t} = useTranslation('navbar');
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.navItems)}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to="/"
                    className={classNames(cls.item)}
                >
                    {t('Main Page', {ns: 'navbar'})}
                </AppLink>
                tr
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to="/about"
                    className={classNames(cls.item)}
                >
                    {t('About Page', {ns: 'navbar'})}
                </AppLink>
            </div>
        </div>
    );
}
