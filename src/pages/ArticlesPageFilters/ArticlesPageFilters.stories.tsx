import type {Meta, StoryObj} from '@storybook/react';
import {ArticlesPageFilters} from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Normal: Story = {
    args: {},
};
