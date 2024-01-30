import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from './AboutPage';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';

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

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};


