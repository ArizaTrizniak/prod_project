import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch';
import {profileActions} from 'features/editableProfileCard/model/slice/profileSlice';
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData';
import {HStack} from 'shared/ui/Stack';
import Text from 'shared/ui/Text/Text';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';

interface EditableProfileCardHeaderProps {
    className?: string;
}

const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        )
                        : (
                            <HStack gap='8'>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                { <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить')}
                                </Button>}
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});

export default EditableProfileCardHeader;