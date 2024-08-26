import type {Meta, StoryObj} from '@storybook/react';
import {CommentList} from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: '_entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'a comment about post 1',
                user: {id: '1', username: 'Vasya'},
            },
            {
                id: '2',
                text: 'a comment about post 2',
                user: {id: '2', username: 'Petro'},
            },
        ]
    },
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
