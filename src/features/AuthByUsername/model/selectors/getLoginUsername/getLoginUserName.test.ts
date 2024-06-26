import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginUsername}
    from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';


describe('getLoginUserName.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '12345'
            }
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('12345');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});