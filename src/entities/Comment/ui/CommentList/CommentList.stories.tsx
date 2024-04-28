import type {Meta, StoryObj} from '@storybook/react';
import {CommentList} from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'Shared/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {},
};
