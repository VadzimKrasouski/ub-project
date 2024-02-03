import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { App } from "app/App";

import 'shared/config/i18n/i18n';

const domNode = document.getElementById('root')

const root = createRoot(domNode);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);


