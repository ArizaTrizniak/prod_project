import type {Meta, StoryObj} from '@storybook/react';

import { ArticleRecommendationList } from './ArticleRecommendationList';
import {StoreDecorator} from '../../../../../config/storybook/preview';
// @ts-ignore
import withMock from 'storybook-addon-mock';

import {Article} from '_entities/Article';

const meta: Meta<typeof ArticleRecommendationList> = {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    },
};
export default meta;

type Story = StoryObj<typeof ArticleRecommendationList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal: Story = {
    decorators: [
        StoreDecorator({}),
        withMock
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
    args: {},
};

