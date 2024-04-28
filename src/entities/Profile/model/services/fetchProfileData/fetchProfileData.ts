import  {createAsyncThunk} from '@reduxjs/toolkit';
import i18n from 'i18next';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile} from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkAPi) => {
        const {extra, dispatch, rejectWithValue } = thunkAPi;
        try {
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Не правильные имя или пароль'));
        }
    }
);

