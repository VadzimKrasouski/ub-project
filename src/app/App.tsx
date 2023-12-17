import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";

import { classNames } from "shared/lib/classNames/classNames";

import './styles/index.scss'

export const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Theme Toggle</button>
            <div className="content-page">
                <AppRouter/>
            </div>
        </div>
    );
};
