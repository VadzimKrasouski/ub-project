import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import { useTheme } from "./theme/useTheme";

import './styles/index.scss'
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <button onClick={toggleTheme}>Theme Toggle</button>
            <Link to='/'>Main Page</Link>
            <Link to='/about'>About Page</Link>
            <Suspense fallback={<div>LOADING...</div>}>
                <Routes>
                    <Route path='/about' element=<AboutPageAsync/>/>
                    <Route path='/' element=<MainPageAsync/>/>
                </Routes>
            </Suspense>
        </div>
    );
};
