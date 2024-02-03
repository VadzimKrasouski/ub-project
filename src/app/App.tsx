import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import './styles/index.scss'
import { Suspense } from "react";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={null}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};
