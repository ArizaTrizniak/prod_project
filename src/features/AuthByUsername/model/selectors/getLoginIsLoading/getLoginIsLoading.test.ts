import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginIsLoading} from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual('error');
    });
    test('empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});