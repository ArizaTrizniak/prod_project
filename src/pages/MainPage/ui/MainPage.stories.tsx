import type {Meta, StoryObj} from '@storybook/react';
import MainPage from './MainPage';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};


