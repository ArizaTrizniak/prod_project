import type {Meta, StoryObj} from '@storybook/react';
import LoginForm from './LoginForm';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
    },
};
Primary.decorators = [StoreDecorator({
    loginForm: {username: '123', password: 'qwe'}
})];

export const WithError: Story = {
    args: {
    },
};
WithError.decorators = [StoreDecorator({
    loginForm: {username: '123', password: 'qwe', error: 'Error'}
})];

export const Loading: Story = {
    args: {
    },
};
Loading.decorators = [StoreDecorator({
    loginForm: {isLoading: true}
})];
