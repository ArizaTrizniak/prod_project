import {lazy} from 'react';

export const MainPageAsync = lazy(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./MainPage')), 1500);
    }
) );