import  {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import i18n from 'i18next';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage';
import {ThunkConfig} from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authData, thunkAPi) => {
            const { extra, dispatch, rejectWithValue } = thunkAPi;
            try {

                const response = await extra.api.post<User>('/login', authData);
                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (e) {
                return rejectWithValue(i18n.t('Не правильные имя или пароль'));
            }
        }
    );

