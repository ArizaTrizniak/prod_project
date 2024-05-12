
import type {Meta, StoryObj} from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {
        layout: 'centered',
        backgroundColor: {control: 'color'}
    },
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
    args: {},
};
