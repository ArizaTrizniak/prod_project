import {lazy} from 'react';

export const ArticlesPageAsync = lazy(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./ArticlesPage')), 500);
    }
));