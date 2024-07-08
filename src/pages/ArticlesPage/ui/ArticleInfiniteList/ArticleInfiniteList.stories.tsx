import type {Meta, StoryObj} from '@storybook/react';
import ArticleInfiniteList from './ArticleInfiniteList';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};
