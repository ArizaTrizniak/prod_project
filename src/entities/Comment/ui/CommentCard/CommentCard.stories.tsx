import type {Meta, StoryObj} from '@storybook/react';
import CommentCard from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'a comment about post 1',
            user: {id: '1', username: 'Vasya'},
        },
    },
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'a comment about post 1',
            user: {id: '1', username: 'Vasya'},
        },
        isLoading: true
    },
};
