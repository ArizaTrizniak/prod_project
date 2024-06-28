import type {Meta, StoryObj} from '@storybook/react';
import Page from './Page';
import {StoreDecorator} from '../../../config/storybook/preview';

const meta: Meta<typeof Page> = {
    title: 'Widget/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    decorators: [
        StoreDecorator( {
            user:{authData: {}}
        })
    ],
    args: {},
};
