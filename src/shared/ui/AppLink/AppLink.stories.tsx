import type {Meta, StoryObj} from '@storybook/react';
import AppLink, {AppLinkTheme} from './AppLink';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof AppLink> = {
    title: 'widget/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    },
    args: {
        to: '/'
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children : 'Text',
        theme:AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        children : 'Text',
        theme:AppLinkTheme.SECONDARY
    },
};

export const Red: Story = {
    args: {
        children : 'Text',
        theme:AppLinkTheme.RED
    },
};

export const PrimaryDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        children : 'Text',
        theme:AppLinkTheme.PRIMARY
    },
};

export const SecondaryDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        children : 'Text',
        theme:AppLinkTheme.SECONDARY
    },
};

export const RedDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        children : 'Text',
        theme:AppLinkTheme.RED
    },
};



