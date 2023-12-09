import { Link } from "react-router-dom";
import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";

import './styles/index.scss'

export const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={toggleTheme}>Theme Toggle</button>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <AppRouter/>
        </div>
    );
};
