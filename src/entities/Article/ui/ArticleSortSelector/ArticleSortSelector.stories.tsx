import type {Meta, StoryObj} from '@storybook/react';
import {ArticleSortSelector} from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
    args: {},
};
