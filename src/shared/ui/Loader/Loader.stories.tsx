import type {Meta, StoryObj} from '@storybook/react';
import Loader from './Loader';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from '../../../../config/storybook/preview';

const meta: Meta<typeof Loader> = {
    title: 'widget/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {},
};


