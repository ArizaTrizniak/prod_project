import type {Meta, StoryObj} from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'Shared/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
    args: {},
};
