import type {Meta, StoryObj} from '@storybook/react';
import Page from './Page';

const meta: Meta<typeof Page> = {
    title: 'Shared/Page',
    component: Page,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
};
