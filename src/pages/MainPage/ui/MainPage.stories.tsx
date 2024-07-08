import type {Meta, StoryObj} from '@storybook/react';
import MainPage from './MainPage';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator, ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({})
    ],
    args: {},
};

