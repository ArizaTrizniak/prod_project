import type {Meta, StoryObj} from '@storybook/react';
import Text, {TextSize, TextTheme} from './Text';
import {ThemeDecorator} from '../../../../config/storybook/preview';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'Shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum'
    },
};
export const TitleOnly: Story = {
    args: {
        title: 'Title lorem ipsum'
    },
};
export const TextOnly: Story = {
    args: {
        text: 'Text lorem ipsum'
    },
};

export const DarkPrimary: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum'
    },
};
export const DarkTitleOnly: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        title: 'Title lorem ipsum'
    },
};
export const DarkTextOnly: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        text: 'Text lorem ipsum'
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
        theme: TextTheme.ERROR
    },
};
export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
        size: TextSize.L,
    },
};


