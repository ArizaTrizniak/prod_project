import {FC, lazy} from 'react';
import {LoginFormProps} from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    }
));