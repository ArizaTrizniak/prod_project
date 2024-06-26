import type {Meta, StoryObj} from '@storybook/react';
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'Shared/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Primary: Story = {
    args: {},
};
