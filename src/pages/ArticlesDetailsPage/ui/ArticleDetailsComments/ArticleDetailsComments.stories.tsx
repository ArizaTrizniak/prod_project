import type {Meta, StoryObj} from '@storybook/react';
import ArticleDetailsComments from './ArticleDetailsComments';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'Shared/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};
