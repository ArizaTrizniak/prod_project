import type {Meta, StoryObj} from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};


