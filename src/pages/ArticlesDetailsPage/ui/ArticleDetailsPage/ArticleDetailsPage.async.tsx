import {lazy} from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./ArticleDetailsPage')), 500);
    }
));