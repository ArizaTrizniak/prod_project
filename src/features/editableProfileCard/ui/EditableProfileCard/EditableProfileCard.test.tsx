import {screen, fireEvent} from '@testing-library/react';
import {EditableProfileCard} from './EditableProfileCard';
import {componentRender} from 'shared/lib/tests/componentRender/componentRender';
import {Profile} from '_entities/Profile';
import {Currency} from '_entities/Currency';
import {Country} from '_entities/Country';
import {profileReducer} from '../../model/slice/profileSlice';
import {userEvent} from '@testing-library/user-event';
import {$api} from 'shared/api/api';


const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 44,
    currency: Currency.EUR,
    country: Country.Armenia,
    city: 'Moscow',
    username: 'admin',
};

const options = {
    initialState : {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    },
};

describe('features/EditableProfileCard', () => {
    test('Read only mode turn off', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        /*expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');*/
    });

    test('Проверка валидации: ожидаем ошибку', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Ели нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id={'1'} />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});