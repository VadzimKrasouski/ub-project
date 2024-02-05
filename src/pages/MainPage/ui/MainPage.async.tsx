import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) =>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line no-promise-executor-return,implicit-arrow-linebreak
  setTimeout(() => resolve(import('./MainPage')), 1500)));
