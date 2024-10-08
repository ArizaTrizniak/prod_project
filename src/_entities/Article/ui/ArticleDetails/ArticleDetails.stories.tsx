import type {Meta, StoryObj} from '@storybook/react';
import {ArticleDetails} from './ArticleDetails';
import {StoreDecorator} from '../../../../../config/storybook/preview';
import {Article} from '../../model/types/article';
import {ArticleBlockType, ArticleType} from '../../model/consts/articleConsts';

const meta: Meta<typeof ArticleDetails> = {
    title: '_entities/Article/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

const article: Article = {
    'id': '1',
    'title': 'Javascript news',
    'subtitle': 'Что нового в JS за 2022 год?',
    'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    'views': 1022,
    'createdAt': '26.02.2022',
    'user': {
        'id': '2',
        'username': 'user',
    },
    'type': [ ArticleType.IT ],
    'blocks': [
        {
            'id': '1',
            'type': ArticleBlockType.TEXT,
            'title': 'Заголовок этого блока',
            'paragraphs': [
                'Программа, которую по традиции называют «Hello, world!», очень проста. ' +
                'Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами ' +
                'некоего языка.',
            ]
        },
        {
            'id': '4',
            'type': ArticleBlockType.CODE,
            'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n ' +
                '   <script>\n    document.getElementById("hello").innerHTML = "Hello, world!";\n' +
                '   </script>\n  </body>\n</html>;'
        },
        {
            'id': '2',
            'type': ArticleBlockType.IMAGE,
            // eslint-disable-next-line max-len
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта'
        }
    ],
};

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article
            },
        })
    ],

    args: {},
};

export const Loading: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        })
    ],

    args: {},
};
export const Error: Story = {
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'error'
            },
        })
    ],

    args: {},
};
