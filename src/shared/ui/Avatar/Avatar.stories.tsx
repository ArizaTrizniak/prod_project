import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from './Avatar';
import AvatartImg from 'shared/assets/test/storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatartImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatartImg,
    },
};