import type {Meta, StoryObj} from '@storybook/react';

import Sidebar from './Sidebar';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator, ThemeDecorator} from '../../../../config/storybook/preview';


const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        StoreDecorator( {
            user:{authData: {}}
        })
    ],
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator( {
            user:{authData: {}}
        })
    ],
    args: {},
};

export const NoAuth: Story = {
    decorators: [
        StoreDecorator( {
            user:{}
        })
    ],
    args: {},
};



