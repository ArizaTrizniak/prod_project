import {lazy} from 'react';

export const ProfilePageAsync = lazy(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./ProfilePage')), 100);
    }
) );