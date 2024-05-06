import type {Meta, StoryObj} from '@storybook/react';
import Card from './Card';
import Text from 'shared/ui/Text/Text';

const meta: Meta<typeof Card> = {
    title: 'Shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
    args: {
        children: <Text title={'text'} text={'test'}/>,
    },
};
