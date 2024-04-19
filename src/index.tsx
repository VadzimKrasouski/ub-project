import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError/ui/PageError';

import 'shared/config/i18n/i18n';

const domNode = document.getElementById('root');

const root = createRoot(domNode);

root.render(
    <StrictMode>
        <ErrorBoundary fallback={<PageError />}>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,
);
