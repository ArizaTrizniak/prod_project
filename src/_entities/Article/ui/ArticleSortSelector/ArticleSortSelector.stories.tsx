import type {Meta, StoryObj} from '@storybook/react';
import {ArticleSortSelector} from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: '_entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
    args: {},
};
