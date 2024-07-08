import type {Meta, StoryObj} from '@storybook/react';
import ArticleListItem from './ArticleListItem';
import {Article, ArticleView} from 'entities/Article';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;


const article = {
    id: '1',
    title: 'Javascript news asfasjf asfjkask f',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Ulbi tv',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста.',
                'Она выводит куда-либо фразу «Hello, world!», или другую, средствами',
                ' некоего языка.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            // eslint-disable-next-line max-len
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста.',
                'Она выводит куда-либо фразу «Hello, world!», или другую подобную,',
                ' средствами некоего языка.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            // eslint-disable-next-line max-len
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],
} as Article;

export const List: Story = {
    args: {
        view: ArticleView.LIST,
        article,
    },
};

export const Plate: Story = {
    args: {
        view: ArticleView.PLATE,
        article,
    },
};
