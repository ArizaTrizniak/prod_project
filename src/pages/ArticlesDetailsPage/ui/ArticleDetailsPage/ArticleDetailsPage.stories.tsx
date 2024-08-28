import type { Meta, StoryObj} from '@storybook/react';

import { Article } from '_entities/Article';
import { ArticleBlockType, ArticleType } from '_entities/Article/model/consts/articleConsts';
import {StoreDecorator} from '../../../../../config/storybook/preview';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Ulbi tv',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста.',
                'Она выводит куда-либо фразу «Hello, world!», или другую подобную,',
                ' средствами некоего языка.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n'+
                '   document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n'+
                '  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста.',
                ' Она выводит куда-либо фразу «Hello, world!», или другую подобную,'+
                ' средствами некоего языка.',
            ],
        },
    ],
};

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        })
    ],
    args: {},
};
