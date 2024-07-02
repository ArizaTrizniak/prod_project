import type {Meta, StoryObj} from '@storybook/react';
import {ListBox} from './ListBox';

type Story = StoryObj<typeof ListBox>;

const meta: Meta<typeof ListBox> = {
    title: 'Shared/ListBox',
    component: ListBox,
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

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: 'Значение',
        items: [
            {content: 'lalala', value: '123'},
            {content: 'lalala1', value: '1234'},
            {content: 'lalala2', value: '1235'}
        ]
    },
};
export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: 'Значение',
        items: [
            {content: 'lalala', value: '123'},
            {content: 'lalala1', value: '1234'},
            {content: 'lalala2', value: '1235'}
        ]
    },
};
export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: 'Значение',
        items: [
            {content: 'lalala', value: '123'},
            {content: 'lalala1', value: '1234'},
            {content: 'lalala2', value: '1235'}
        ]
    },
};
export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: 'Значение',
        items: [
            {content: 'lalala', value: '123'},
            {content: 'lalala1', value: '1234'},
            {content: 'lalala2', value: '1235'}
        ]
    },
};
