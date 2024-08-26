import type {Meta, StoryObj} from '@storybook/react';
import {CurrencySelect} from './CurrencySelect';


const meta: Meta<typeof CurrencySelect> = {
    title: '_entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {},
};
