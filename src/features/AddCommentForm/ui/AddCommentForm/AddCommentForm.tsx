import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {Input} from 'shared/ui/Input/Input';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';
import {useSelector} from 'react-redux';
import {
    getAddCommentFormText
} from '../../model/selectors/addCommentFormSelector';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {addCommentFormActions, addCommentFormReducer}
    from '../../model/slices/addCommentFormSlice';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {HStack} from 'shared/ui/Stack';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm : addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {className, onSendComment} = props;
    const {t} = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setTest(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                justify={'between'}
                max
                className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;