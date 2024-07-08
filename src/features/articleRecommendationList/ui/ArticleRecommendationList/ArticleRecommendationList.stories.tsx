import type {Meta, StoryObj} from '@storybook/react';

import { ArticleRecommendationList } from './ArticleRecommendationList';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof ArticleRecommendationList> = {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    }
};
export default meta;

type Story = StoryObj<typeof ArticleRecommendationList>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};