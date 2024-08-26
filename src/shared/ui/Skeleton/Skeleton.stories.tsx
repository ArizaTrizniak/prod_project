import type {Meta, StoryObj} from '@storybook/react';
import Skeleton from './Skeleton';
import {ThemeDecorator} from '../../../../config/storybook/preview';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Skeleton> = {
    title: 'Shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: {
        width: 300,
        height: 100
    },
};
export const Round: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
};

export const DarkNormal: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ],
    args: {
        width: 300,
        height: 100
    },
};
export const DarkRound: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ],
    args: {
        border: '50%',
        width: 100,
        height: 100
    },
};
