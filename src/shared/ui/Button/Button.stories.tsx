import type {Meta, StoryObj} from '@storybook/react';

import Button, {ThemeButton} from './Button';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';
//import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Test',
    },
};

export const Clear: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
};



