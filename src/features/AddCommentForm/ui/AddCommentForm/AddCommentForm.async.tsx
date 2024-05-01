import {FC, lazy} from 'react';
import {AddCommentFormProps} from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise(
    resolve => {
        // @ts-ignore
        // Эти задержки только для курса!!!!!!
        setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    }
));