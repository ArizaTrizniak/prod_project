import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {memo, useCallback} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {useSelector} from 'react-redux';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect';
import {Currency} from '_entities/Currency';
import {Country} from '_entities/Country';
import Text, {TextTheme} from 'shared/ui/Text/Text';
import {getProfileForm} from '../../model/selectors/getProfileForm/getProfileForm';
import {
    getProfileIsLoading
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ProfileCard} from '_entities/Profile';
import { ValidateProfileError } from '../../model/consts/consts';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import {DynamicModuleLoader, ReducersList}
    from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import EditableProfileCardHeader
    from '../../ui/EditableProfileCardHeader/EditableProfileCardHeader';
import {VStack} from 'shared/ui/Stack';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {t} = useTranslation('profile');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

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
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap='8' max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader/>
                {validateErrors && validateErrors?.length > 0 &&
                    validateErrors.map((err: ValidateProfileError) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateProfileTemplates[err]}
                            data-testid='EditableProfileCard.Error'
                        />
                    ))}
                <ProfileCard
                    data={formData}
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
            </VStack>
        </DynamicModuleLoader>
    );
});