import {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {loginActions} from '../../model/slice/loginSlice';
import {Input} from 'shared/ui/Input/Input';
import {getLoginState} from '../../model/selectors/getLoginState';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import Text, {TextTheme} from 'shared/ui/Text/Text';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const  onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username: loginForm.username, password: loginForm.password}));
    }, [dispatch, loginForm.password, loginForm.username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {loginForm.error && <Text text={loginForm.error} theme={TextTheme.ERROR}/>}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите логин')}
                autofocus
                onChange={onChangeUsername}
                value={loginForm.username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={loginForm.password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={loginForm.isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;