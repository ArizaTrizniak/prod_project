import type {Meta, StoryObj} from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
        })
    ],
    args: {},
};
