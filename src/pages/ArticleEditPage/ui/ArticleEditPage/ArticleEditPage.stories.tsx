import type {Meta, StoryObj} from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};
