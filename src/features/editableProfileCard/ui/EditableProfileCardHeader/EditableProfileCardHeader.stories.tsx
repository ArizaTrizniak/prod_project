import type {Meta, StoryObj} from '@storybook/react';
import EditableProfileCardHeader from './EditableProfileCardHeader';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Primary: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};
