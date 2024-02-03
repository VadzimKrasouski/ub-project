import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";

import { classNames } from "shared/lib/classNames/classNames";

import './styles/index.scss'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <ThemeSwitcher/>
            <div className="content-page">
                <AppRouter/>
            </div>
        </div>
    );
};
