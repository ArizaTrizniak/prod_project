import {lazy} from 'react';

export const AboutPageAsync = lazy(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    }
));