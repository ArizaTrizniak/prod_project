import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from './AboutPage';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator, ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {
    args: {},
};
Normal.decorators = [StoreDecorator({
    counter: {
        value: 1
    }
})];

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};
Dark.decorators = [StoreDecorator({
    counter: {
        value: 1
    }
})];


