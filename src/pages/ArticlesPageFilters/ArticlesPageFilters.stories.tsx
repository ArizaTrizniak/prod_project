import type {Meta, StoryObj} from '@storybook/react';
import {ArticlesPageFilters} from './ArticlesPageFilters';
import {StoreDecorator} from '../../../config/storybook/preview';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'fullscreen',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({})
    ],
    args: {},
};
