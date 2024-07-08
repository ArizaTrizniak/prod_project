import type {Meta, StoryObj} from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import {action} from '@storybook/addon-actions';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {
        onSendComment: action('onSendComment'),
    },
};
