import type {Meta, StoryObj} from '@storybook/react';
import {ProfileCard} from './ProfileCard';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import avatar from 'shared/assets/test/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: '123',
            age: 25,
            country: Country.Kazakhstan,
            lastname: 'Dow',
            first: 'John',
            currency: Currency.EUR,
            city: 'sdsd',
            avatar: avatar
        }
    },
};

export const WithError: Story = {
    args: {
        error: 'true'
    },
};

export const Loading: Story = {
    args: {
        isLoading: true
    },
};
