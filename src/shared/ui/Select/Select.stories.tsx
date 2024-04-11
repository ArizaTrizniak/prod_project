import type {Meta, StoryObj} from '@storybook/react';
import {Select} from './Select';

const meta: Meta<typeof Select> = {
    title: 'Shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'selector',
        options: [
            {value: '1', content: 'Пункт 1'},
            {value: '2', content: 'Пункт 2'},
            {value: '3', content: 'Пункт 3'}
        ]
    },
};
