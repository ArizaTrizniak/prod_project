import type {Meta, StoryObj} from '@storybook/react';
import {Input} from './Input';

const meta: Meta<typeof Input> = {
    title: 'Shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123233',
    },
};





