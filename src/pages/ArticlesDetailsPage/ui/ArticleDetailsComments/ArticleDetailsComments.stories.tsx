import type {Meta, StoryObj} from '@storybook/react';
import ArticleDetailsComments from './ArticleDetailsComments';
import {StoreDecorator, SuspenseDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({}),
        SuspenseDecorator
    ],
    args: {},
};
