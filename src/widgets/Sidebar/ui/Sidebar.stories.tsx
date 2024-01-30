import type {Meta, StoryObj} from '@storybook/react';

import Sidebar from './Sidebar';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';


const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};



