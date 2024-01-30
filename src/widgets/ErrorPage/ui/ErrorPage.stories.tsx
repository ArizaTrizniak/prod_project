import type {Meta, StoryObj} from '@storybook/react';

import ErrorPage from './ErrorPage';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';


const meta: Meta<typeof ErrorPage> = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};



