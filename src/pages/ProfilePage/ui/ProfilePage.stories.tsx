import type {Meta, StoryObj} from '@storybook/react';
import ProfilePage from './ProfilePage';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const NormalProfile: Story = {
    args: {},
};

export const DarkProfile: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};


