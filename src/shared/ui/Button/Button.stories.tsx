import type {Meta, StoryObj} from '@storybook/react';

import Button, {ButtonSize, ButtonTheme} from './Button';
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
        theme: ButtonTheme.CLEAR,
    },
};
export const Outline: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
    },
};

export const OutlineDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    },
};



