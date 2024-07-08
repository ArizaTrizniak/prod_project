import type {Meta, StoryObj} from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import {StoreDecorator} from '../../../../../config/storybook/preview';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    }
};
export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};