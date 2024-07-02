import type {Meta, StoryObj} from '@storybook/react';
import {Dropdown} from './Dropdown';
import Button from 'shared/ui/Button/Button';

type Story = StoryObj<typeof Dropdown>;

const meta: Meta<typeof Dropdown> = {
    title: 'Shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (StoryObj) => (
            <div style={{ padding: '10em' }}>
                <StoryObj />
            </div>
        ),
    ],
};

export default meta;

export const TopRight: Story = {
    args: {
        trigger: <Button>click</Button>,
        direction: 'top right',
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]
    },
};

export const BottomRight: Story = {
    args: {
        trigger: <Button>click</Button>,
        direction: 'bottom right',
        items: [
            {
                content: 'first'
            },
            {
                content: 'second'
            },
            {
                content: 'third'
            }
        ]
    },
};
