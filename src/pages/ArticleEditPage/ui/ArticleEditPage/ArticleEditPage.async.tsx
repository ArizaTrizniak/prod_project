import {lazy} from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./ArticleEditPage')), 500);
    }
));