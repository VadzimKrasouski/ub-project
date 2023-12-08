import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";

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


