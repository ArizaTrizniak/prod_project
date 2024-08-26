import type {Meta, StoryObj} from '@storybook/react';
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};
