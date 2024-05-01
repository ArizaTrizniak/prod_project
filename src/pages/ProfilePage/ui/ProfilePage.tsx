import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    fetchProfileData,
    getProfileError, getProfileForm,
    getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import {useCallback, useEffect } from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';
import {ProfilePageHeader} from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import {TextTheme} from 'shared/ui/Text/Text';
import {ValidateProfileError} from 'entities/Profile/model/types/profile';
import Text from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {useParams} from 'react-router-dom';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const {id} = useParams<{id: string}>();

    const {t} = useTranslation('profile');
    
    const validateProfileTemplates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileError.NO_DATA]: t('Нет данных'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Неправильные данные пользователя'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректное название страны')
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency: currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({country: country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors && validateErrors?.length > 0 &&
                    validateErrors.map((err:ValidateProfileError) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateProfileTemplates[err]}
                        />
                    ))}
                <ProfileCard
                    data = {formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;