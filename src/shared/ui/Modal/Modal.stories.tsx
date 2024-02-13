import type {Meta, StoryObj} from '@storybook/react';
import {Modal} from 'shared/ui/Modal/Modal';
import {ThemeDecorator} from '../../../../config/storybook/preview';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Test test test',
    },
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
        isOpen: true,
        children: 'Test test test',
    },
};