import type {Meta, StoryObj} from '@storybook/react';

import Navbar from './Navbar';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator, ThemeDecorator} from '../../../../config/storybook/preview';


const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: undefined
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: undefined
        }),
    ],
    args: {},
};

export const AuthNavbar: Story = {
    decorators: [
        StoreDecorator({
            user: {authData: {}}
        }),
    ],
    args: {},
};



