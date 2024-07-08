import type {Meta, StoryObj} from '@storybook/react';
import ProfilePage from './ProfilePage';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator, ThemeDecorator} from '../../../../config/storybook/preview';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import avatar from 'shared/assets/test/storybook.jpg';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const NormalProfile: Story = {
    args: {},
};

NormalProfile.decorators = [StoreDecorator({
    profile: {
        form: {
            username: '123',
            age: 25,
            country: Country.Kazakhstan,
            lastname: 'Dow',
            first: 'John',
            currency: Currency.EUR,
            city: 'sdsd',
            avatar: avatar 
        }
    }
})];

export const DarkProfile: Story = {
    args: {},
};
DarkProfile.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: '123',
                age: 25,
                country: Country.Kazakhstan,
                lastname: 'Dow',
                first: 'John',
                currency: Currency.EUR,
                city: 'sdsd',
                avatar: avatar
            }
        }
    })];


